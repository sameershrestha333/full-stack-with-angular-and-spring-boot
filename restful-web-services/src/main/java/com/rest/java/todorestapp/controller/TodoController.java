package com.rest.java.todorestapp.controller;

import com.rest.java.todorestapp.model.Todo;
import com.rest.java.todorestapp.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users/")
@CrossOrigin(origins = "http://localhost:4200")
public class TodoController {

    @Autowired
    private TodoService todoService;


    @GetMapping("{username}/todos")
    public List<Todo> getTodos(@PathVariable String username) {
        return todoService.getListOfTodoByUserName(username);
    }


    @PostMapping("{username}/todos")
    public ResponseEntity<Todo> saveTodo(@PathVariable String username, @RequestBody Todo todo) {
        todo.setUsername(username);
        System.out.println(todo);
        Todo savedTodo = todoService.saveTodo(todo);
        return new ResponseEntity<>(savedTodo, HttpStatus.OK);
    }

    @PutMapping("{username}/todos/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable String username, @RequestBody Todo todo, @PathVariable int id) {
        todo.setUsername(username);
        Todo updatedTodo = todoService.saveTodo(todo);
        return new ResponseEntity<>(updatedTodo, HttpStatus.OK);
    }

    @GetMapping("{username}/todos/{id}")
    public ResponseEntity<Todo> getById(@PathVariable String username, @PathVariable Long id) {
        final Optional<Todo> optTodo = todoService.getById(id);
        if (optTodo.isPresent()) {
            return new ResponseEntity<Todo>(optTodo.get(), HttpStatus.CREATED);

        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("{username}/todos/{id}")
    public ResponseEntity deleteById(@PathVariable String username, @PathVariable Long id) {
        final Optional<Todo> optTodo = todoService.deleteById(id);
        if (optTodo.isPresent()) {
            return ResponseEntity.noContent().build();

        } else {
            return ResponseEntity.notFound().build();
        }

    }
}
