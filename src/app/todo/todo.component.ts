import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  public todos;
  public activeTasks;
  public searchStr = ''

  getTodos() {
    return this.todoService.get(this.searchStr).then(todos => {
      this.todos = todos;
      this.activeTasks = this.todos.filter(todo => todo.isDone).length;
    });
  }

  public newTodo;
  addTodo() {
    return this.todoService.add({ title: `${this.newTodo}`, isDone: false }).then(() => {
      return this.getTodos();
    }).then(() => {
      this.newTodo = '';
    })
  }

  updateTitle(todo, newTitle) {
    return this.todoService.putTitle(todo, newTitle).then(() => {
      todo.editing = false;
      return this.getTodos();
    });
  }

  updateIsDone(todo) {
    return this.todoService.putIsDone(todo).then(() => {
      return this.getTodos();
    })
  }

  deleteTodo(todo) {
    return this.todoService.delete(todo).then(() => {
      return this.getTodos();
    })
  }

  ngOnInit(): void {
    this.getTodos()
  }

}
