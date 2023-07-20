package com.magno.spring.controller;

import com.magno.spring.model.Course;
import com.magno.spring.repository.CourseRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

//O restcontroller mostra o endpoint
//O requestmapping mostra o endpoint (endereço)
@RestController
@RequestMapping("/api/courses")
@AllArgsConstructor
public class CourseController {

    private final CourseRepository courseRepository;


    //Getmapping usa o método GET na comunicação http
    @GetMapping
    public List<Course> list() {
        return courseRepository.findAll();
    }
}
