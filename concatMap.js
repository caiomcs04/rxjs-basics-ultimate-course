import { fromEvent, interval } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { concatMap, take} from 'rxjs/operators';

const BASE_URL = 'https://api.openbrewerydb.org/breweries';

const interval$ = interval(1000);
const click$ = fromEvent(document, 'click');

//ConcatMap wuill quene the request. After one finish other will start if was already emitted
click$.pipe(
    concatMap(()=> interval$.pipe(take(5),))
).subscribe(console.log)

