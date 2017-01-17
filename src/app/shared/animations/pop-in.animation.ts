import { trigger, state, animate, style, transition } from '@angular/core';
export const popInAnimation = trigger('popIn', [
    transition(':enter', [  // before 2.1: transition('void => *', [
        style({ transform: 'scale(0.3)' }),
        animate('0.35s ease-in-out', style({ transform: 'scale(1)' }))
    ]),
    transition(':leave', [  // before 2.1: transition('* => void', [
        style({ transform: 'scale(1)' }),
        animate('0.35s ease-in-out', style({ transform: 'scale(0.3)' }))
    ])
]);