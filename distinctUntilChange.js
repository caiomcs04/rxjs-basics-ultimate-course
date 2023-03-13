import { of, from } from 'rxjs'
import { distinctUntilChanged,reduce, scan, map, pluck, distinctUntilKeyChanged } from 'rxjs/operators'

const numbers$ = of(1,1,2,3,3,3,3,4,5,3)

    numbers$.pipe(
    distinctUntilChanged()
    ).subscribe(console.log)


    const user = [
        {name: 'Caio', loggedIn: false, token: null},
        {name: 'Caio', loggedIn: true, token: null},
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
    
    const name$ = state$.pipe(
        distinctUntilKeyChanged('name'),
        pluck('name'), 
        )
    
    name$.subscribe(console.log)