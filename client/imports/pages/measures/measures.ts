import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as Moment from 'moment';
import { Observable } from 'rxjs';

import { Measures } from '../../../../imports/collections';
import { Measure } from '../../../../imports/models';
import { MessagesPage } from '../messages/messages';
import template from './measures.html';
 
@Component({
  template
})
export class MeasuresPage implements OnInit {
  measures: Observable<Measure[]>;
  toggle:any[] = {};

 
  constructor(private navCtrl: NavController) {}
 
  ngOnInit() {
    this.measures = Measures.find({}).map((measures: Measure[]) => {return measures});
  }
}
