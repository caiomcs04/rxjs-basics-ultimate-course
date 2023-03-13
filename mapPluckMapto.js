import { fromEvent } from 'rxjs';
import {map, pluck, mapTo} from 'rxjs/operators';


// of(1,2,3,4,5,6).pipe(map(x => x * 10)).subscribe(console.log)

const keyup$ = fromEvent(document, 'keyup')

// Transform every element on the desire return
keyup$.pipe(map(value => value.code)).subscribe(console.log)

const keyupWithPluck$ = fromEvent(document, 'keyup')

// Return the content of a selected param
keyupWithPluck$.pipe(pluck('code')).subscribe(console.log)

const keyupWithMapTo$ = fromEvent(document, 'keyup')

// Allways return a specif value
keyupWithMapTo$.pipe(mapTo('Key pressed')).subscribe(console.log)