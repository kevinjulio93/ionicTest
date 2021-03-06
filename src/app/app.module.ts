import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {EditPageModule} from '../pages/edit/edit.module';
import {NewareaPageModule} from '../pages/newarea/newarea.module';
import { IonicStorageModule } from '@ionic/storage';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LifeScoresServiceProvider } from '../providers/life-scores-service/life-scores-service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    EditPageModule,
    NewareaPageModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LifeScoresServiceProvider
  ]
})
export class AppModule {}
