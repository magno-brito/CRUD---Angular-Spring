package com.magno.spring;

import com.magno.spring.model.Course;
import com.magno.spring.repository.CourseRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	@Bean
	CommandLineRunner initDataBase(CourseRepository courseRepository) {
		return args -> {
			courseRepository.deleteAll();
			Course curso = new Course();
			curso.setName("Tailwind");
			curso.setCategory("Front-end");
			courseRepository.save(curso);
		};
	}

}
