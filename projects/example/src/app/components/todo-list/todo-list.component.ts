import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  animations: [
    trigger('todoListAnimations', [
      state('in', style({ opacity: 1, transform: 'none' })),
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(100px)' }),
        animate('1s ease-out')
      ])
    ])
  ]
})
export class TodoListComponent implements OnInit {
  todoList: Todo[] = [];

  constructor() {}

  ngOnInit(): void {
    this.todoList = [
      {
        title: 'get the package',
        desc: 'the package arrived at CaiNiao three days ago',
        targetFinishDate: '2022-04-03'
      }
    ];
    setTimeout(() => {
      this.todoList = [
        {
          title: 'clean the house',
          desc: 'the house is so dirty',
          targetFinishDate: '2022-04-03'
        },
        {
          title: 'watch movie',
          desc: 'the movie is awesome',
          targetFinishDate: '2022-04-03'
        },
        {
          title: 'get the package',
          desc: 'the package arrived at CaiNiao three days ago',
          targetFinishDate: '2022-04-03'
        }
      ];
    }, 3000);
  }
}

export interface Todo {
  title: string;
  desc: string;
  targetFinishDate: string;
}
