import {of, fromEvent} from 'rxjs'
import {takeWhile ,map, first} from 'rxjs/operators'

const click$ = fromEvent(document, 'click')

click$.pipe(
    map(event =>({
        x: event.clientX,
        y: event.clientY
    })),
    takeWhile(({y}) => y <= 200)
    ).subscribe({
        next: console.log,
        complete: () => console.log('Complete')
    })