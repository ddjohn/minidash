import { Meteor } from 'meteor/meteor';
import * as Moment from 'moment';

import { Measures } from '../imports/collections';
 
Meteor.startup(() => {

  if(Measures.find({}).cursor.count() === 0) {
    Measures.collection.insert({icon:'alert', name:'bbb', value:7, status:'danger'});
    Measures.collection.insert({icon:'icecream', name:'bbb', value:7, status:'warning'});
    Measures.collection.insert({icon:'wifi', name:'bbb', value:7, status:'info'});
  }
});