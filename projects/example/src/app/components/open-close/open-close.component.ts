import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'blue'
      })),
      transition('open <=> closed', [
        animate('0.5s 0s cubic-bezier(0.61, 1, 0.88, 1)')
      ]),
    ]),
  ]
})
export class OpenCloseComponent implements OnInit {
  isOpen = true;

  constructor() { }

  ngOnInit(): void {}

  toggle() {
    this.isOpen = !this.isOpen;
  }

}
