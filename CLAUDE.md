# Stardew Resume

Angular 17 app that parses a Stardew Valley save file (XML, uploaded by the user or loaded from a default sample) and lets you browse it: quests, social/friendship data, item search, and a tile-based visual map of any location with chests, buildings and terrain.

## Stack & conventions

- Angular 17, **NgModule-based** (not standalone components). Nearly everything is declared in `src/app/app-routing.module.ts` — that module also imports shared things like `CommonModule`, `ReactiveFormsModule`, `HttpClientModule`, `TranslateModule`. When adding a new component/directive, declare it there.
- Styling is Tailwind only (no Angular Material / ng-bootstrap). Theme colors: `orange`, `lightbrown`, `brown` (see `tailwind.config.js`). The existing card pattern (`bg-lightbrown border-brown border-4 rounded-lg shadow-md` wrapper with a `bg-orange border-b-4` header bar) is the house style — reuse it for new sections instead of inventing new chrome.
- Package manager is **bun** (`bun.lock` is the committed lockfile). Use `bun add`/`bun install`, not npm, unless bun is unavailable.
- No tests exist yet beyond the CLI-generated spec stubs.

## Folder layout

- `src/pages/*` — routed page components (one per route in `app-routing.module.ts`).
- `src/components/*` — shared chrome used outside the router-outlet: header, footer, file-reader (upload bar), popup-stack (global modal stack).
- `src/services/*` — `SaveGameService` (parses/queries the save file) and `MapPopupService` (popup stack state).
- `src/directives/*` — `PanZoomDirective`, used only inside map popups.
- `src/assets/locations/*` — location background PNGs (16px/tile). `src/assets/{building,item,terrain,tree,floor,farm}/*` — sprite sheets, named after the in-game type (spaces become underscores, see `spriteName()` in `save-game.service.ts`).
- `src/assets/i18n/{es,en}.json` — translation files, namespaced by component (`HEADER.*`, `FARM_MAP.*`, etc).

## Save-game domain model (`save-game.service.ts`)

A save file has many `GameLocation`s (Farm, FarmHouse, Greenhouse, Barn, Town, ...). `getLocationVisual(name)` turns one location into a `LocationVisual`: `buildings` / `items` / `terrains` / `chests`, each a `VisualEntity` with `tileX`, `tileY`, `width` (in tiles) and a `spriteType` (folder/file under `assets/`).

`calculatePosition()` in `farm-map.component.ts` converts tile coordinates to `%`-based `top`/`left`/`width`/`height` against `canvasWidthTiles`/`canvasHeightTiles`, so the map scales with its container instead of using fixed pixels.

**Z-index rule:** stacking must be `z-index = tileY` (lower on the map → higher tileY → renders in front), set via **`[style.z-index]`, never a dynamic Tailwind class** like `'z-' + tileY`. Tailwind's JIT scanner only generates utilities for literal class tokens it finds in source files — a runtime-concatenated string is invisible to it, so no CSS is ever generated and stacking silently falls back to DOM order. This bit us once; don't reintroduce it.

Buildings whose type matches a real indoor location (Barn, Coop, Greenhouse, FarmHouse, Shed — see `BUILDING_ENTRY_ALIASES`) get an `entryLocation` on their `VisualEntity`, which is what makes them clickable in the map popup.

## Popup map system

`MapPopupService` holds a stack (`PopupEntry[]`) of either `{ type: 'location' }` or `{ type: 'chest' }` entries. `PopupStackComponent` (mounted once in `main-page.component.html`) renders the stack as overlays, most recent on top, and clears it on every route navigation.

`FarmMapComponent` is the single component used both for the full-page `/map/:location` route and inside popups (`[popupMode]="true"`). Clicking an enterable building or a chest calls `MapPopupService.openLocation()` / `openChest()`, pushing another popup on top — that's how "farm → Greenhouse → its chest" nests. Zoom/pan (`PanZoomDirective`) is **only active in popup mode**; the full-page route intentionally has no zoom controls.

## i18n

`@ngx-translate/core` + `@ngx-translate/http-loader`, loaded from `assets/i18n/{lang}.json`. Pin to `@ngx-translate/core@17.x` — newer majors require Angular ≥18, which this app isn't on. Language toggle lives in the header, persisted in `localStorage` under `lang`, default `es`. Strings interpolated/built in TypeScript (e.g. `chestTitle()`, `containerLabel()`) use `TranslateService.instant()`; template strings use the `translate` pipe.
