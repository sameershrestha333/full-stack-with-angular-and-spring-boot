import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(public id: number, public description: string, public isDone: boolean, public targetDate: Date) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})


export class ListTodosComponent implements OnInit {

  todos: Todo[]
  message: String
  // [
  //   new Todo(1,'Coding excercise', false,new Date()),
  //   new Todo(1,'Lunch', true,new Date()),

  //   new Todo(1,'Rest', false,new Date()),
  //   ]

  constructor(private todoService: TodoDataService, private router: Router) { }

  ngOnInit() {
    this.todoService.retriveAllTodos('sameer').subscribe(
      responce => this.handleSuccessResponse(responce)
    );
  }

  handleSuccessResponse(responce) {
    console.log(responce);
    this.todos = responce;
  }


  deleteToById(id) {
    console.log(`to be delete ${id}`);

    this.todoService.deleteToById('sameer', id).subscribe(
      responce => this.handleDelete(responce, id)
    );
  }

  updateById(id) {
    console.log(`update : ${id}`);

    this.router.navigate(['todos', id]);   
  }



  handleDelete(responce, id) {
    this.message = `Todo with id ${id} has been deleted successfully!`
    this.todoService.retriveAllTodos('sameer').subscribe(
      responce => this.handleSuccessResponse(responce)
    );
  }
  

  addTodo(){
    this.router.navigate(['todos',-1]);
  }

}
