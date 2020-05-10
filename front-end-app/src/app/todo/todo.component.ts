import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number
  todo: Todo
  saveOrEditMessage: ''

  constructor(private todoService: TodoDataService, private router: ActivatedRoute, private routerLink: Router) { }

  ngOnInit() {
    this.getById()
  }

  getById() {
    this.id = this.router.snapshot.params['id'];
    console.log(this.id);
    this.todo = new Todo(this.id, '', false, new Date);

    if (this.id != -1) {
      this.todoService.getById('sameer', this.id).subscribe(
        responce => this.handleGetTodoSuccessResponse(responce)
      );
    }
  }


  handleGetTodoSuccessResponse(responce) {
    console.log(responce);
    this.todo = responce;
  }


  saveTodo() {
    console.log("Id" + this.id);

    if (this.id != -1) {
      console.log("PUT");
      console.log('updated with id : ' + this.id);
      this.todoService.updateTodo('sameer', this.id, this.todo).subscribe(
      );      
    } else {
      console.log("POSt:::::::::");
      console.log(this.todo);
      
      this.todoService.saveTodo('sameer', this.todo).subscribe();
    }
    this.routerLink.navigate(['todos']);
  }
}
