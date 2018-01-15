import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';


/*
  Generated class for the LifeScoresServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LifeScoresServiceProvider {

  private areas : {title : string, score:string}[]=[];

  constructor() {

  }

  newArea(area : {title:string, score: string}){

    this.areas.push(area);

  }
  getAllArea(){
    return [...this.areas];
  }

}
