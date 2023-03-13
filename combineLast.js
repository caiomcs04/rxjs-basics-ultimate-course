import { fromEvent, combineLatest } from "rxjs";

const keyUp$ = fromEvent(document, 'keyup')
const click$ = fromEvent(document, 'click')

combineLatest(
    keyUp$,
    click$
).subscribe(console.log)