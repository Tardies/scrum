package com.example.backend;

import com.example.backend.Inprogress.Inprogress;
import com.example.backend.Inprogress.InprogressRepository;
import com.example.backend.Story.StoryRepository;
import com.example.backend.Todo.Todo;
import com.example.backend.Story.Story;
import com.example.backend.Todo.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.stream.Stream;

@SpringBootApplication
public class BackendApplication {
    private StoryRepository storyRepository;
    private TodoRepository todoRepository;

    private InprogressRepository inprogressRepository;
    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

    @Bean
    CommandLineRunner initStory(StoryRepository storyRepository) {
        this.storyRepository = storyRepository;
        return args -> {
            Stream.of(
                    new Story("Server side", "Write a REST API"),
                    new Story("Client side", "Frontend Web Application")
            ).forEach(story -> storyRepository.save(story));
            storyRepository.findAll().forEach(System.out::println);
        };
    }

    @Bean
    CommandLineRunner initTodo(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
        return args -> {
            Stream.of(
                    new Todo("Money transfer webpage", "Self-explanatory name of the task. Just do it, I don't care how.")
            ).forEach(todo -> todoRepository.save(todo));
            todoRepository.findAll().forEach(System.out::println);
        };
    }

    @Bean
    CommandLineRunner initInprogress(InprogressRepository inprogressRepository) {
        this.inprogressRepository = inprogressRepository;
        return args -> {
            Stream.of(
                    new Inprogress("Statistics webpage", "Self-explanatory name of the task. Just do it, I don't care how.")
            ).forEach(inprogress ->  inprogressRepository.save(inprogress));
            inprogressRepository.findAll().forEach(System.out::println);
        };
    }

    @Autowired
    public void setStoryRepository(StoryRepository storyRepository) {
        this.storyRepository = storyRepository;
    }

    @Autowired
    public void setTodoRepository(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    @Autowired
    public void setInprogressRepository(InprogressRepository inprogressRepository){
        this.inprogressRepository = inprogressRepository;
    }
}
