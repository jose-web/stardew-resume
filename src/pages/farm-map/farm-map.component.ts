import { Component } from '@angular/core';
import { PurpleItem, SaveGame } from '../../type/SaveGame';

@Component({
  templateUrl: './farm-map.component.html',
  styleUrl: './farm-map.component.scss',
})
export class FarmMapComponent {

  public farmType = ''
  public buildings: {buildingType: string, tileX: number, tileY:number, width: number}[] = []
  public items: {buildingType: string, tileX: number, tileY:number, width: number}[] = []

  constructor() {}

  ngOnInit() {
    let info: SaveGame = JSON.parse(sessionStorage.getItem("saveGames")!).SaveGame
    this.getFarmType(info)
        
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

        // if(iterator.value.Object.name == 'Stone Fence' ){
        //   console.log(iterator);
        // }

        // if(iterator.value.Object.name == 'Rarecrow' ){
        //   console.log((iterator.value.Object as any).itemId);
        // }
      }
    }
    
  }

  getFarmType(info: SaveGame){
    let farmName = ['default']
    this.farmType = 'assets/farm/' + farmName[Number(info.whichFarm)] + '/farm_'+ farmName[Number(info.whichFarm)]+ '_' + info.currentSeason + '.png';
  }

  calculatePosition(width: number, tileX: number, tileY: number){
    return 'width:'+ this.calculateWidth(width) +'%; height:'+this.calculateHeight(1)+'%; top:'+this.calculateHeight(tileY)+'%; left:'+ this.calculateWidth(tileX)+'%;'
  }

  private calculateWidth(width: number){
    return 100 * (width * 16) / 1280
  }

  private calculateHeight(height: number){
    return 100 * (height * 16) / 1040
  }
}
