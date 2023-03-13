import { fromEvent, interval } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { switchMap, debounceTime, distinctUntilChanged, map} from 'rxjs/operators';

const BASE_URL = 'https://api.openbrewerydb.org/breweries';

const interval$ = interval(1000);
const click$ = fromEvent(document, 'click');

// click$.pipe(
//     switchMap(()=> interval$)
// ).subscribe(console.log)




const textInput = document.getElementById('text-input')
const typeaheadContainer = document.getElementById('typeahead-container')
const type$ = fromEvent(textInput, 'keyup')


type$.pipe(
    map(value =>{ 
           return value.target.value
    }),
    distinctUntilChanged(),
    switchMap(searchTerm =>{
        return ajax.getJSON(`${BASE_URL}?by_name=${searchTerm}`)
    })
    ).subscribe(response =>{
        typeaheadContainer.innerHTML = response.map(value => value.name).join('<br>')
    })