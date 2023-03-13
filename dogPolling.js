import { fromEvent, interval, timer } from 'rxjs'
import {ajax} from 'rxjs/ajax'
import { takeUntil, switchMap, finalize, tap, switchMapTo, map } from 'rxjs/operators'

const BASE_URL = 'https://random.dog/woof.json';


// elements
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const pollingStatus = document.getElementById('polling-status');
const dogImage = document.getElementById('dog')

// streams
const startClick$ = fromEvent(startButton, 'click')
const stopClick$ = fromEvent(stopButton, 'click')

startClick$.pipe(
    switchMapTo(timer(0, 5000).pipe(
        tap(() => pollingStatus.innerHTML = 'Active' ),
        switchMapTo(ajax.getJSON(BASE_URL)),
        map(value => value.url),
        tap(value => dogImage.src = value),
        takeUntil(stopClick$),
        finalize(() => pollingStatus.innerHTML = 'Stopped')
    )),
).subscribe(console.log)