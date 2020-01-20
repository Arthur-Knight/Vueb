package com.arthur.service;

import com.arthur.entity.User;

public interface UserService {
    User save(User user);
    User getByName(String username);
}
