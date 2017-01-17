import { trigger, state, animate, style, transition } from '@angular/core';
export const fadeInAnimation = trigger('fadeIn', [
        transition(':enter', [  // before 2.1: transition('void => *', [
            style({ opacity: '0' }),
            animate('0.15s ease-in-out', style({ opacity: '0.7' }))
        ]),
        transition(':leave', [  // before 2.1: transition('* => void', [
            style({ opacity: '0.7' }),
            animate('0.15s ease-in-out', style({ opacity: '0' }))
        ])
    ])