import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { LifeScoresServiceProvider } from '../../providers/life-scores-service/life-scores-service'
import {EditPage} from '../edit/edit';
import {HomePage} from '../home/home';

/**
 * Generated class for the NewareaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newarea',
  templateUrl: 'newarea.html',
})
export class NewareaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private lifeSrvc: LifeScoresServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewareaPage');
  }

close(){
  this.viewCtrl.dismiss();
}

addArea(value :{title :string}){

this.lifeSrvc.newArea(value);
this.navCtrl.push(HomePage);
this.viewCtrl.dismiss();
}

}
