import { Component,OnInit } from '@angular/core';
import { Todo } from './todo';
import { BackendService } from './backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BackendService]
})
export class AppComponent implements OnInit{
  newTodo: Todo = new Todo();
  todos: Todo[] = [];

  constructor(    
    private backendService: BackendService) {
  }

  ngOnInit() {
    this.alltodos();
  }

  addTodo() {
    this.backendService.save(this.newTodo)
      .subscribe(
        (newTodo) => {
          this.todos = this.todos.concat(newTodo);
        }
      )
    this.newTodo = new Todo();
  }

  toggleComplete(todo: Todo) {

    todo.complete = !todo.complete;

    this.backendService.save(todo).subscribe();
    
  }

  removeTodo(todo) {
    this.backendService
    .delete(todo)
    .subscribe(
      (_) => {
        this.todos = this.todos.filter((t) => t.id !== todo.id);
      }
    );

  }

  alltodos() {
    return this.backendService.all()
    .subscribe(
      (todos) => {
        this.todos = todos;
      }
    );
  }
}
