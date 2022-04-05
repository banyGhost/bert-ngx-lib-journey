import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenCloseComponent } from './open-close/open-close.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [OpenCloseComponent, TodoListComponent],
  imports: [CommonModule],
  exports: [OpenCloseComponent, TodoListComponent]
})
export class ComponentsModule {}
