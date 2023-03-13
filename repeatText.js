import { from } from 'rxjs';
import {mapTo} from 'rxjs/operators';

export const repeatText = () =>{

const mockText = document.querySelector('.mock-test');
const text = 'Integer a quam ac quam facilisis consectetur in a sem. Nam sed hendrerit sem. Nunc posuere at ipsum vel convallis. Nam massa sapien, pretium sit amet commodo eu, euismod vel turpis. Quisque sed turpis vel augue suscipit congue. In egestas sodales sagittis. Nam in orci ac erat finibus placerat a quis sem. Nunc rutrum accumsan accumsan. Sed interdum convallis est. Nulla euismod, neque nec laoreet rutrum, mi turpis consequat eros, non dictum odio mi at nisl. Nulla non elit finibus, suscipit leo vitae, lobortis sem. In vestibulum ante arcu, nec gravida libero molestie sed. Quisque tristique, arcu at volutpat scelerisque, est augue efficitur diam, sit amet egestas sem lacus quis lectus. Nam nisi ipsum, convallis at purus eu, gravida euismod leo. Phasellus vestibulum purus libero, nec vulputate magna consectetur sed.'
const br = document.createElement("br");
const br2 = document.createElement("br");

const repeat$ = from([1,2,3,4,5,6,7,8,9])

const repeatedText$ = repeat$.pipe(mapTo(text))

    repeatedText$.subscribe(
        {
            next: value => {
                    mockText.innerHTML += value
                    mockText.appendChild(br)
                    mockText.appendChild(br2)
                    return;
            },
            error: err => console.warn(err)
        })
    }