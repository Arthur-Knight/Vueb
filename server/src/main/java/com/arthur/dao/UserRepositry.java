package com.arthur.dao;

import com.arthur.entity.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepositry extends CrudRepository<User, String> {
    User getByName(String username);
}
