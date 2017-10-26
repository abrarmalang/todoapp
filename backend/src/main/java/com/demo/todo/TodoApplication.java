package com.demo.todo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class TodoApplication {

	public static void main(String[] args) {
		SpringApplication.run(TodoApplication.class, args);
	}

	@Bean
	CommandLineRunner runner(TodoRepository todoRepo){
		return args -> {
			todoRepo.save( new Todo(1L,"Hire Java dev",  true) );
			todoRepo.save( new Todo(2L,"Hire db dev",  false) );
			todoRepo.save( new Todo(3L,"Hire frontend dev",  false) );
			todoRepo.save( new Todo(4L,"Hire integration dev",  false) );
			todoRepo.save( new Todo(5L,"Scrap the above",  false) );
      todoRepo.save( new Todo(6L,"hire fullstack",  false) );
		};
	}

}
