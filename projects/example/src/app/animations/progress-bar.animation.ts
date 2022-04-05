import {
  animate,
  animateChild,
  query,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

export const progressBarAmination = trigger('progressBarAnimation', [
  state('true', style({ opacity: 0.4 })),
  state('false', style({ opacity: 0 })),
  transition('false => true', [
    query(':enter', style({ transform: 'translateX(-100%)' })),
    animate('100ms'),
    animateChild(),
    query(':enter', animate('10s ease-in', style({ transform: 'none' })))
  ])
]);
