import {
  animate,
  animateChild,
  group,
  query,
  style,
  transition,
  trigger
} from '@angular/animations';

export const routeAnimations = [
  trigger('routeAnimations', [
    transition('HomePage <=> AboutPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%'
        })
      ]),
      query(':enter', [style({ left: '-100%' })]),
      query(':leave', [style({ left: '100%' })]),
      group([
        query(':enter', [animate('.3s ease-out', style({ left: 0 }))]),
        query(':leave', [animate('.3s ease-out', style({ left: '100%' }))])
      ]),
      query(':enter', animateChild())
    ])
  ])
];
