import { from, interval } from 'rxjs'
import { reduce, take } from 'rxjs/operators'

const numbers = [1,2,3,4,5]

const totalReducer = (acumulator, currentValue) =>{
    return acumulator + currentValue
}

// Return the some of numbers with the previous total similar to a +=
// In the case of the reduce will return the final total
from(numbers).pipe(
    scan(totalReducer, 0)
    ).subscribe(
        {
            next:console.log,
            complete: () => console.log('Complete!')
        }
    )


