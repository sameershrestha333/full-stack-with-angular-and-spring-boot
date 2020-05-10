package com.rest.java.todorestapp.service;

import com.rest.java.todorestapp.model.Todo;

import java.util.List;
import java.util.Optional;

public interface TodoService {
    List<Todo> getListOfTodoByUserName(String userName);

    Optional<Todo> deleteById(Long id);

    Optional<Todo> getById(Long id);

    Todo saveTodo(Todo todo);
}
