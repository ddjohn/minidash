import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { MeasuresPage } from '../pages/measures/measures';
import template from "./app.html";
 
@Component({
	selector: 'minidash',
	template
})
export class MiniDashApp {
  rootPage = MeasuresPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      if (platform.is('cordova')) {
        StatusBar.styleDefault();
        Splashscreen.hide();
      }
    });
  }
}
