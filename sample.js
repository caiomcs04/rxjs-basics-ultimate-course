import { fromEvent } from "rxjs";
import { sampleTime, map} from "rxjs/operators";

const click$ = fromEvent(document, 'click')

click$.pipe(
    sampleTime(3000),
    map(({clientX, clientY}) =>({ 
       clientX,
       clientY
    }))
    ).subscribe(console.log)