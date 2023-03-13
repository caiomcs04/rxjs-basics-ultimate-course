import {interval,fromEvent} from 'rxjs'
import {scan, mapTo, take, filter, takeWhile, takeUntil, startWith} from 'rxjs/operators'
import {repeatText} from './repeatText' 


// elements
const countdown = document.getElementById('countdown')
const abortButton = document.getElementById('abort')


// streams
const counter$ = interval(1000)
const abortClick$ = fromEvent(abortButton, 'click')
const COUNTDOWN_FROM = 5

counter$.pipe(
    //First solution for less than 0 problem
    // take(11),

    mapTo(-1),
    scan((accumulator, current) => {
        return accumulator + current;
    }, COUNTDOWN_FROM),
    // Solution the course gave
    // filter(value => value > -1))

    // Improved solution
    takeWhile((value) => value >= 0),
    takeUntil(abortClick$),
    startWith(COUNTDOWN_FROM)
    )
    .subscribe(value =>{
        countdown.innerHTML = value;
        if(!value){
            countdown.innerHTML = ''
            repeatText()
        }
    })