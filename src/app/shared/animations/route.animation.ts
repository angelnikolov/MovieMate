import { trigger, state, animate, style, transition } from '@angular/core';
export const routeAnimation = trigger('routeAnimation', [
    transition(':enter', [  // before 2.1: transition('void => *', [
        style({ transform: 'translateX(100%)' }),
        animate('0.35s ease-in-out', style({ transform: 'translateX(0%)' }))
    ]),
    transition(':leave', [  // before 2.1: transition('* => void', [
        style({ transform: 'translateX(0%)' }),
        animate('0.35s ease-in-out', style({ transform: 'translateX(100%)' }))
    ])
])