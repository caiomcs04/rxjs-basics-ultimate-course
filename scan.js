import { from } from 'rxjs'
import { reduce, scan, map, pluck} from 'rxjs/operators'

const numbers = [1,2,3,4,5]
const user = [
    {name: 'Caio', loggedIn: false, token: null},
    {name: 'Pamela', loggedIn: true, token:'abc'},
    {name: 'Luiz', loggedIn: true, token: '123'},

]

const totalReducer = (acumulator, currentValue) =>{
    return {...acumulator, ...currentValue}
}

// Similar to reduce, but return each emitted value
const state$ = from(user).pipe(
    scan(totalReducer, {})
    )

const name$ = state$.pipe(pluck('name'))

name$.subscribe(console.log)