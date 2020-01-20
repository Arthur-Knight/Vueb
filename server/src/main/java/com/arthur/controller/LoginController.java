package com.arthur.controller;

import com.arthur.entity.User;
import com.arthur.service.UserService;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

@RestController
@RequestMapping("/rest")
@ResponseBody
public class LoginController {
    @Resource
    private UserService userService;

    @PostMapping(value="/login")
    public User login(@RequestBody User user) throws JsonProcessingException {
        return userService.getByName(user.getName());
    }
}

