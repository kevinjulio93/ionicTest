import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewareaPage } from './newarea';

@NgModule({
  declarations: [
    NewareaPage,
  ],
  imports: [
    IonicPageModule.forChild(NewareaPage),
  ],
})
export class NewareaPageModule {}
