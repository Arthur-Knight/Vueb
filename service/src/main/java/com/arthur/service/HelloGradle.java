package com.arthur.service;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

public class HelloGradle {
    @RestController("/")
    public class HelloGradleController {

        @GetMapping
        public String helloGradle() {
            return "Hello Gradle!";
        }

    }
}
