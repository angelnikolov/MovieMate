import { trigger, state, animate, style, transition, keyframes } from '@angular/core';
export const slideLeftAnimation = trigger('slideLeftAnimation', [
    transition(':enter', [  // before 2.1: transition('void => *', [
        style({ transform: 'translateX(100%)', zIndex: 1 }),
        animate("0.35s ease-in-out", keyframes([
            style({ transform: "translateX(90%)" }), // offset = 0
            style({ transform: "translateX(30%)" }), // offset = 0.33
            style({ transform: "translateX(-10%)" }),// offset = 0.66
            style({ transform: "translateX(10%)" }),// offset = 1
        ]))
    ]),
    transition(':leave', [  // before 2.1: transition('* => void', [
        style({ transform: 'translateX(0%)', zIndex: 1 }),
        animate('0.35s ease-in-out', style({ transform: 'translateX(100%)' }))
    ])
])
export const slideRightAnimation = trigger('slideRightAnimation', [
    transition(':enter', [  // before 2.1: transition('void => *', [
        style({ transform: 'translateX(-100%)', zIndex: 1 }),
        animate("0.35s ease-in-out", keyframes([
            style({ transform: "translateX(-90%)" }), // offset = 0
            style({ transform: "translateX(-30%)" }), // offset = 0.33
            style({ transform: "translateX(10%)" }),// offset = 0.66
            style({ transform: "translateX(0%)" }),// offset = 1
        ]))
    ]),
    transition(':leave', [  // before 2.1: transition('* => void', [
        style({ transform: 'translateX(0%)', zIndex: 1 }),
        animate('0.35s ease-in-out', style({ transform: 'translateX(-100%)' }))
    ])
])