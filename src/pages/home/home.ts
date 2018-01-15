import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {EditPage} from '../edit/edit';
import { LifeScoresServiceProvider } from '../../providers/life-scores-service/life-scores-service'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

     areas: {title: string}[]=[];
  constructor(public navCtrl: NavController, private lifeSrvc: LifeScoresServiceProvider) {

  }

  gotoEditPage(){
    this.navCtrl.push(EditPage);
  }
  ionViewWillEnter(){
    this.areas = this.getAllareas();
  }

  getAllareas(){
    return this.lifeSrvc.getAllArea();
  }
}
