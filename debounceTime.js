import { fromEvent } from "rxjs";
import { debounceTime, map, tap, distinctUntilChanged } from "rxjs/operators";

const textInput = document.getElementById('text-input')

const type$ = fromEvent(textInput, 'keyup')


type$.pipe(
    debounceTime(500),
    map(value =>{ 
           return value.target.value
    }),
    distinctUntilChanged()
    ).subscribe(console.log)