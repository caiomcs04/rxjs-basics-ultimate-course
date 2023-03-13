import { of, fromEvent } from 'rxjs';
import {filter, map} from 'rxjs/operators';

// Filter the elements of an observable
// of(1,2,3,4,5,6).pipe(filter(x => x > 3)).subscribe(console.log)

const keyup$ = fromEvent(document, 'keyup')

keyup$.pipe(
    map(value => value.code),
    filter(value => 'Enter' === value)).subscribe(console.log)
