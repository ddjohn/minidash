import { MongoObservable } from 'meteor-rxjs';

import { Measure } from '../models';
 
export const Measures = new MongoObservable.Collection<Measure>('measures');
