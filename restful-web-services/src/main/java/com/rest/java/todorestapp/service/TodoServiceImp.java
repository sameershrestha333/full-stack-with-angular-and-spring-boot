package com.rest.java.todorestapp.service;

import com.rest.java.todorestapp.model.Todo;
import com.rest.java.todorestapp.repo.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TodoServiceImp implements TodoService {

    @Autowired
    private TodoRepository todoRepository;

    @Override
    public List<Todo> getListOfTodoByUserName(String userName) {
        return todoRepository.findByUsername(userName);
    }

    @Override
    public Optional<Todo> deleteById(Long id) {
        final Optional<Todo> optTodo = getById(id);
        if (optTodo.isPresent()) {
            todoRepository.deleteById(id);
            return optTodo;
        }
        return Optional.empty();
    }

    @Override
    public Optional<Todo> getById(Long id) {
        return todoRepository.findById(id);
    }

    @Override
    public Todo saveTodo(Todo todo) {
        todoRepository.save(todo);
        return todoRepository.save(todo);
    }
}
