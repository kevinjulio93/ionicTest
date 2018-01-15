import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import {NewareaPage} from '../newarea/newarea';
import { LifeScoresServiceProvider } from '../../providers/life-scores-service/life-scores-service'
/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {
   
   areas: {title: string, score: string}[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl : ModalController ,
  public viewCtrl: ViewController, private lifeSrvc: LifeScoresServiceProvider) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPage');
  }

  NewAreamodal(){
    let modal = this.modalCtrl.create(NewareaPage);
    modal.present();
    modal.onDidDismiss

  }
  ionViewWillEnter(){
    this.areas = this.getAllareas();
  }

  getAllareas(){
    return this.lifeSrvc.getAllArea();
  }

}
