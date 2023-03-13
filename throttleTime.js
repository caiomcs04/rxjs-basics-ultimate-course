import { fromEvent } from "rxjs";
import { throttleTime, map } from "rxjs/operators";

const click$ = fromEvent(document, 'click')

// ThrottleTime Get one emit in the time gap set.
// e.g. it will get emit per every 3 seconds.
// so if I click 100 timesin less than 3 seconds it will emit only 1 click, the first one.
// After thre 3 seconds, if I click again It will emit the new value.
click$.pipe(
    throttleTime(3000),
    map(({clientX, clientY}) =>({ 
       clientX,
       clientY
    }))
    ).subscribe(console.log)