package com.rest.java.todorestapp.controller;

import com.rest.java.todorestapp.model.HellowWorld;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class HelloController {


    @GetMapping("/helloWord")
    public HellowWorld getMessage() {
//         throw new RuntimeException("some error");
        return new HellowWorld("Hello world..");
    }
}
