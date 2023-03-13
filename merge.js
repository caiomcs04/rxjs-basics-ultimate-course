import { fromEvent, merge } from "rxjs";

const keyUp$ = fromEvent(document, 'keyup')
const click$ = fromEvent(document, 'click')

merge(
    keyUp$,
    click$
).subscribe(console.log)