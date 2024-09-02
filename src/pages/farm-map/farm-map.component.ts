import { Component } from '@angular/core';
import { PurpleItem, SaveGame } from '../../type/SaveGame';

@Component({
  selector: 'app-farm-map',
  templateUrl: './farm-map.component.html',
  styleUrl: './farm-map.component.scss',
})
export class FarmMapComponent {

  public origin = window.location.origin.includes('localhost') ? '' : "/stardew-resume/"

  public farmType = ''
  public buildings: { buildingType: string, tileX: number, tileY: number, width: number }[] = []
  public items: { buildingType: string, tileX: number, tileY: number, width: number }[] = []
  public terrains: { buildingType: string, tileX: number, tileY: number, width: number }[] = []

  constructor() { }

  ngOnInit() {
    let info: SaveGame = JSON.parse(sessionStorage.getItem("saveGames")!).SaveGame
    this.getFarmType(info)

    for (const iterator of info.locations.GameLocation[0].terrainFeatures.item) {
      if (typeof (iterator as any).value.TerrainFeature?.grassType != 'string') {

        if ((iterator as any).value.TerrainFeature.whichFloor) {

          this.terrains.push({
            buildingType: 'floor/' + (iterator as any).value.TerrainFeature.whichFloor,
            tileX: Number(iterator.key.Vector2.X),
            tileY: Number(iterator.key.Vector2.Y),
            width: 1,
          })

        } else if (iterator.value.TerrainFeature.crop) {

          this.terrains.push({
            buildingType: 'terrain/tilled-land',
            tileX: Number(iterator.key.Vector2.X),
            tileY: Number(iterator.key.Vector2.Y),
            width: 1,
          })

        } else if (iterator.value.TerrainFeature.treeType) {
                    
          if(iterator.value.TerrainFeature.health=='10')
          this.terrains.push({
            buildingType: 'tree/' + iterator.value.TerrainFeature.treeType,
            tileX: Number(iterator.key.Vector2.X) - 1,
            tileY: Number(iterator.key.Vector2.Y) + 0.5,
            width: 3,
          })

        } else {

          // this.terrains.push({
          //   buildingType: 'tree/',
          //   tileX: Number(iterator.key.Vector2.X),
          //   tileY: Number(iterator.key.Vector2.Y),
          //   width: 3,
          // })

        }

      }
    }

    for (const iterator of info.locations.GameLocation[0].buildings?.Building!) {
      this.buildings.push({
        buildingType: iterator.buildingType.replaceAll(' ', '_'),
        tileX: Number(iterator.tileX),
        tileY: Number(iterator.tileY) + Number(iterator.tilesHigh) -1 ,
        width: Number(iterator.tilesWide),
      })
    }

    if (typeof info.locations.GameLocation[0].objects === 'object') {
      for (const iterator of info.locations.GameLocation[0].objects.item as PurpleItem[]) {

        this.items.push({
          buildingType: iterator.value.Object.name.replaceAll(' ', '_').replace('Rarecrow', 'Scarecrow'),
          tileX: Number(iterator.value.Object.tileLocation.X),
          tileY: Number(iterator.value.Object.tileLocation.Y),
          width: 1,
        })

      }
    }

  }

  getFarmType(info: SaveGame) {
    let farmName = ['default']
    this.farmType = 'assets/farm/' + farmName[Number(info.whichFarm)] + '/farm_' + farmName[Number(info.whichFarm)] + '_' + info.currentSeason + '.png';
  }

  calculatePosition(width: number, tileX: number, tileY: number) {
    return 'width:' + this.calculateWidth(width) + '%; height:' + this.calculateHeight(1) + '%; top:' + this.calculateHeight(tileY) + '%; left:' + this.calculateWidth(tileX) + '%;'
  }

  private calculateWidth(width: number) {
    return 100 * (width * 16) / 1280
  }

  private calculateHeight(height: number) {
    return 100 * (height * 16) / 1040
  }
}
