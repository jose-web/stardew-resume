import { Injectable } from '@angular/core';

export interface VisualEntity {
  spriteType: string;
  tileX: number;
  tileY: number;
  width: number;
  entryLocation?: string;
}

export interface ChestContent {
  name: string;
  quantity: number;
  quality: number;
}

export interface ChestVisual extends VisualEntity {
  items: ChestContent[];
}

export interface LocationVisual {
  name: string;
  displayName: string;
  isFarm: boolean;
  buildings: VisualEntity[];
  items: VisualEntity[];
  terrains: VisualEntity[];
  chests: ChestVisual[];
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
}

export interface ItemHit {
  name: string;
  quantity: number;
  quality: number;
  locationName: string;
  container: 'Inventario' | 'Nevera' | 'Cofre' | 'Suelo';
  tileX?: number;
  tileY?: number;
}

interface SearchContext {
  locationName: string;
  container: ItemHit['container'];
  tileX?: number;
  tileY?: number;
}

const PRIORITY_LOCATIONS = ['Farm', 'FarmHouse', 'FarmCave', 'Greenhouse', 'Town'];

// Greenhouse and FarmHouse are their own top-level GameLocation entries. Animal houses
// (Coop/Barn/Shed) are NOT — their interior lives nested under the Building itself
// (building.indoors), addressed by building.indoors.uniqueName, so they're resolved
// directly in getLocationVisual() instead of through this alias table.
const BUILDING_ENTRY_ALIASES: Record<string, string> = {
  farmhouse: 'FarmHouse', greenhouse: 'Greenhouse',
};

@Injectable({ providedIn: 'root' })
export class SaveGameService {

  private cachedSave: any = null;

  getSave(): any {
    if (!this.cachedSave) {
      const raw = sessionStorage.getItem('saveGames');
      this.cachedSave = raw ? JSON.parse(raw).SaveGame : null;
    }
    return this.cachedSave;
  }

  private toArray<T>(value: T | T[] | undefined | null): T[] {
    if (value == null) return [];
    return Array.isArray(value) ? value : [value];
  }

  private getLocations(): any[] {
    const save = this.getSave();
    if (!save) return [];
    return this.toArray(save.locations?.GameLocation);
  }

  private findLocation(name: string): any {
    return this.getLocations().find(location => location?.name === name);
  }

  // Animal house interiors (Coop/Barn/Shed, including upgrade tiers) aren't listed
  // among the top-level GameLocations — they live nested under their Building entry.
  private findIndoorBuilding(uniqueName: string): any {
    for (const location of this.getLocations()) {
      for (const building of this.toArray(location.buildings?.Building)) {
        if (building.indoors?.uniqueName === uniqueName) return building.indoors;
      }
    }
    return undefined;
  }

  private hasVisualContent(location: any): boolean {
    if (!location) return false;
    if (typeof location.objects === 'object') return true;
    if (location.buildings?.Building) return true;
    if (typeof location.furniture === 'object') return true;
    const terrainItems = this.toArray(location.terrainFeatures?.item);
    return terrainItems.length > 0;
  }

  resolveLocationName(name: string): string | undefined {
    return this.getLocations()
      .map(location => location?.name as string)
      .find(locationName => locationName?.toLowerCase() === name.toLowerCase());
  }

  getBuildingEntryLocation(spriteType: string): string | undefined {
    const core = spriteType.replace('building/', '').replace(/^(Deluxe_|Big_)/, '').toLowerCase();
    const alias = BUILDING_ENTRY_ALIASES[core];
    if (!alias) return undefined;
    return this.resolveLocationName(alias);
  }

  getLocationNames(): string[] {
    const names = this.getLocations()
      .filter(location => this.hasVisualContent(location))
      .map(location => location.name as string);

    const unique = Array.from(new Set(names));

    return unique.sort((a, b) => {
      const priorityA = PRIORITY_LOCATIONS.indexOf(a);
      const priorityB = PRIORITY_LOCATIONS.indexOf(b);
      if (priorityA !== -1 || priorityB !== -1) {
        return (priorityA === -1 ? 999 : priorityA) - (priorityB === -1 ? 999 : priorityB);
      }
      return a.localeCompare(b);
    });
  }

  private spriteName(name: string): string {
    return name.replaceAll(' ', '_').replace('Rarecrow', 'Scarecrow');
  }

  itemSpriteName(name: string): string {
    return this.spriteName(name);
  }

  getLocationVisual(name: string): LocationVisual {
    const topLevel = this.findLocation(name);
    const location = topLevel ?? this.findIndoorBuilding(name);

    const visual: LocationVisual = {
      name,
      displayName: location?.name ?? name,
      isFarm: name === 'Farm',
      buildings: [],
      items: [],
      terrains: [],
      chests: [],
      minX: 0,
      minY: 0,
      maxX: 20,
      maxY: 15,
    };

    if (!location) return visual;

    for (const entry of this.toArray(location.terrainFeatures?.item)) {
      const feature = entry?.value?.TerrainFeature;
      if (!feature || typeof feature.grassType === 'string') continue;

      const tileX = Number(entry.key.Vector2.X);
      const tileY = Number(entry.key.Vector2.Y);

      if (feature.whichFloor !== undefined) {
        visual.terrains.push({ spriteType: 'floor/' + feature.whichFloor, tileX, tileY, width: 1 });
      } else if (feature.crop) {
        visual.terrains.push({ spriteType: 'terrain/tilled-land', tileX, tileY, width: 1 });
      } else if (feature.treeType && feature.health === '10') {
        visual.terrains.push({ spriteType: 'tree/' + feature.treeType, tileX: tileX - 1, tileY: tileY + 0.5, width: 3 });
      }
    }

    for (const building of this.toArray(location.buildings?.Building)) {
      const spriteType = 'building/' + this.spriteName(building.buildingType);
      visual.buildings.push({
        spriteType,
        tileX: Number(building.tileX),
        tileY: Number(building.tileY) + Number(building.tilesHigh) - 1,
        width: Number(building.tilesWide),
        entryLocation: building.indoors?.uniqueName ?? this.getBuildingEntryLocation(spriteType),
      });
    }

    if (typeof location.objects === 'object') {
      for (const entry of this.toArray(location.objects?.item)) {
        const obj = entry?.value?.Object;
        if (!obj) continue;

        const tileX = Number(obj.tileLocation.X);
        const tileY = Number(obj.tileLocation.Y);
        const isChest = obj.items !== undefined || obj.chestType !== undefined;

        if (isChest) {
          visual.chests.push({
            spriteType: 'item/Chest',
            tileX,
            tileY,
            width: 1,
            items: this.toArray(obj.items?.Item).map(item => ({
              name: item.Name ?? item.name,
              quantity: Number(item.Stack ?? item.stack ?? 1),
              quality: Number(item.quality ?? item.Quality ?? 0),
            })),
          });
        } else {
          visual.items.push({
            spriteType: 'item/' + this.spriteName(obj.name ?? obj.Name),
            tileX,
            tileY,
            width: 1,
          });
        }
      }
    }

    const allTiles = [...visual.buildings, ...visual.items, ...visual.terrains, ...visual.chests];
    if (allTiles.length > 0) {
      visual.minX = Math.min(...allTiles.map(t => t.tileX));
      visual.minY = Math.min(...allTiles.map(t => t.tileY));
      visual.maxX = Math.max(...allTiles.map(t => t.tileX + t.width));
      visual.maxY = Math.max(...allTiles.map(t => t.tileY + 1));
    }

    return visual;
  }

  searchItem(query: string): { total: number; hits: ItemHit[] } {
    const normalized = query.trim().toLowerCase();
    const save = this.getSave();
    if (!normalized || !save) return { total: 0, hits: [] };

    const hits: ItemHit[] = [];

    const visit = (node: any, ctx: SearchContext) => {
      if (node == null) return;

      if (Array.isArray(node)) {
        for (const entry of node) visit(entry, ctx);
        return;
      }

      if (typeof node !== 'object') return;

      const name = node.Name ?? node.name;
      const stack = node.Stack ?? node.stack;
      const isItemStack = typeof name === 'string' && stack !== undefined && !isNaN(Number(stack));

      if (isItemStack && name.toLowerCase().includes(normalized)) {
        hits.push({
          name,
          quantity: Number(stack),
          quality: Number(node.quality ?? node.Quality ?? 0),
          locationName: ctx.locationName,
          container: ctx.container,
          tileX: ctx.tileX,
          tileY: ctx.tileY,
        });
      }

      let nextCtx = ctx;

      const tileLocation = node.tileLocation ?? node.TileLocation;
      const isChestLike = node.items !== undefined || node.chestType !== undefined;
      if (isChestLike && tileLocation) {
        const isFridge = node.fridge === 'true' || node.fridge === true;
        nextCtx = {
          ...ctx,
          container: isFridge ? 'Nevera' : 'Cofre',
          tileX: Number(tileLocation.X),
          tileY: Number(tileLocation.Y),
        };
      }

      if (typeof node.name === 'string' && node.terrainFeatures !== undefined) {
        nextCtx = { locationName: node.name, container: 'Suelo', tileX: undefined, tileY: undefined };
      }

      for (const key of Object.keys(node)) {
        visit(node[key], nextCtx);
      }
    };

    const player = save.player;
    if (player?.items) {
      visit(player.items, { locationName: 'Inventario', container: 'Inventario' });
    }

    visit(save.locations?.GameLocation, { locationName: '', container: 'Suelo' });

    const total = hits.reduce((sum, hit) => sum + hit.quantity, 0);
    return { total, hits };
  }
}
