import { fromEvent } from "rxjs";
import { auditTime, map } from "rxjs/operators";

const click$ = fromEvent(document, 'click')

click$.pipe(
   auditTime(3000),
    map(({clientX, clientY}) =>({ 
       clientX,
       clientY
    }))
    ).subscribe(console.log)