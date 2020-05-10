package com.rest.java.todorestapp.service;

import com.rest.java.todorestapp.model.Todo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class TodoHardCodedServiceImp  {

    private static List<Todo> todos = new ArrayList<>();

    private static int idCount = 1;

    /*static {
        todos.add(new Todo(idCount++, "Coding excercise from db ", false, new Date()));
        todos.add(new Todo(idCount++, "Lunch from db", true, new Date()));

        todos.add(new Todo(idCount++, "Rest from db", false, new Date()));
    }
*/

    public List<Todo> getListOfTodo() {
        return todos;
    }


    public Optional<Todo> deleteById(int id) {
        final Optional<Todo> optTodo = getById(id);
        if (optTodo.isPresent()) {
            todos.remove(optTodo.get());
            return optTodo;
        }
        return Optional.empty();
    }


    public Optional<Todo> getById(int id) {
        for (Todo todo : todos) {
            if (todo.getId() == id) {
                System.out.println(todo);
                return Optional.of(todo);
            }
        }
        return Optional.empty();
    }


    public Todo saveTodo(Todo todo) {
        if (todo.getId() <= 0) {
//            todo.setId(++idCount);
            todos.add(todo);
        } else {
            todos.remove(todo);
            todos.add(todo);
        }

        return todo;
    }
}
