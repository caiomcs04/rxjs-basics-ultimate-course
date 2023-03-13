import {of, interval, empty} from 'rxjs'
import { take, concat, startWith, delay} from 'rxjs/operators'

const interval$ = interval(1000);
const delayed$ = empty().pipe(delay(1000))

delayed$.pipe(
    concat(
        delayed$.pipe(startWith('3...')),
        delayed$.pipe(startWith('2...')),
        delayed$.pipe(startWith('1...')),
        delayed$.pipe(startWith('GO!!!'))

        ),
        startWith('Get Ready!')
)
.subscribe(console.log)