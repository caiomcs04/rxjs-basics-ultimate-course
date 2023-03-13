import { fromEvent, interval } from 'rxjs';
import { exhaustMap, take} from 'rxjs/operators';


const interval$ = interval(1000);
const click$ = fromEvent(document, 'click');

// ExhaustMap will ignore any other observable chainduring the current one is runing
click$.pipe(
    exhaustMap(()=> interval$.pipe(take(5),))
).subscribe(console.log)
