import { fromEvent, asyncScheduler } from 'rxjs';
import {map, pluck, mapTo, throttleTime, tap} from 'rxjs/operators';

// Calculate the percentage of where the scroll is on user view
const calculatorScrollPercent = (element) => {
    const {scrollTop, scrollHeight, clientHeight} = element

    return (scrollTop / (scrollHeight - clientHeight)) * 100
}

// Get the top bar element
const progressBar = document.querySelector('.progress-bar');

// An Observable that gets the event scroll
const scroll$ = fromEvent(document, 'scroll')

// An Observable thatgets the event scroll observable mutated with map.
const progress$ = scroll$.pipe(
    throttleTime(30, asyncScheduler, {
        leading: false,
        trailing: true
    }),
    map(({target}) => {
      return calculatorScrollPercent(target.scrollingElement)
    }), tap(console.log))

    // Subscription of the observable that return  the percentage of scrolling bar
    progress$.subscribe(percent => {
        progressBar.style.width = `${percent}%`;
    })