import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { MomentModule  } from 'angular2-moment';

import { MiniDashApp   } from './app.component';
import { MeasuresPage  } from '../pages/measures/measures';
import { MessagesPage  } from '../pages/messages/messages';

@NgModule({
  declarations: [
    MiniDashApp,
    MeasuresPage,
    MessagesPage
  ],
  imports: [
    IonicModule.forRoot(MiniDashApp),
    BrowserModule,
    MomentModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MiniDashApp,
    MeasuresPage,
    MessagesPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class MiniDashAppModule {}
