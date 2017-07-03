import 'zone.js';
import 'reflect-metadata';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Meteor } from 'meteor/meteor';
import { MiniDashAppModule } from './imports/app/app.module';
 
Meteor.startup(() => {
  platformBrowserDynamic().bootstrapModule(MiniDashAppModule);
});
