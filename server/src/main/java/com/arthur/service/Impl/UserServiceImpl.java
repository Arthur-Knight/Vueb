package com.arthur.service.Impl;

import com.arthur.dao.UserRepositry;
import com.arthur.entity.User;
import com.arthur.service.UserService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;

@Service
public class UserServiceImpl implements UserService {
    @Resource
    private UserRepositry userRepositry;

    @Override
    @Transactional
    public User save(User user) {
        return userRepositry.save(user);
    }

    @Override
    public User getByName(String username) {
        return userRepositry.getByName(username);
    }
}
