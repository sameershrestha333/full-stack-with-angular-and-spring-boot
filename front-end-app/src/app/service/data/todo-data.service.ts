import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';



@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) {

  }

  retriveAllTodos(userName) {
    return this.http.get<Todo[]>(`http://localhost:8080/users/${userName}/todos`);
  }

  deleteToById(userName, id) {
    return this.http.delete(`http://localhost:8080/users/${userName}/todos/${id}`);
  }

  getById(userName, id) {
    return this.http.get<Todo>(`http://localhost:8080/users/${userName}/todos/${id}`);
  }

  saveTodo(userName, todo) {    
    return this.http.post(`http://localhost:8080/users/${userName}/todos`, todo);
  }

  updateTodo(userName, id, todo) {
    return this.http.put(`http://localhost:8080/users/${userName}/todos/${id}`, todo);
  }
}
