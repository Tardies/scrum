package com.example.backend;

import com.example.backend.Blocked.Blocked;
import com.example.backend.Blocked.BlockedRepository;
import com.example.backend.Done.Done;
import com.example.backend.Done.DoneRepository;
import com.example.backend.Inprogress.Inprogress;
import com.example.backend.Inprogress.InprogressRepository;
import com.example.backend.Story.StoryRepository;
import com.example.backend.Testing.Testing;
import com.example.backend.Testing.TestingRepository;
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

    private TestingRepository testingRepository;

    private DoneRepository doneRepository;

    private BlockedRepository blockedRepository;

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

    @Bean
    CommandLineRunner initTesting(TestingRepository testingRepository) {
        this.testingRepository = testingRepository;
        return args -> {
            Stream.of(
                    new Testing("Login page", "Mostly of cases")
            ).forEach(testing -> testingRepository.save(testing));
            testingRepository.findAll().forEach(System.out::println);
        };
    }

    @Bean
    CommandLineRunner initDone(TestingRepository testingRepository) {
        this.doneRepository = doneRepository;
        return args -> {
          Stream.of(
                  new Done("Account get responses", "For login page"),
                  new Done("Balance get responses", "For account page"),
                  new Done("Statistics get responses", "For account page")
          ).forEach(done -> doneRepository.save(done));
          doneRepository.findAll().forEach(System.out::println);
        };
    }

    @Bean
    CommandLineRunner initBlocked(BlockedRepository blockedRepository) {
        this.blockedRepository = blockedRepository;
        return args -> {
          Stream.of(
                  new Blocked("Ponny website", "dumb idea")
          ).forEach(blocked -> blockedRepository.save(blocked));
          blockedRepository.findAll().forEach(System.out::println);
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

    @Autowired
    public void setTestingRepository(TestingRepository testingRepository) {
        this.testingRepository = testingRepository;
    }

    @Autowired
    public void setDoneRepository(DoneRepository doneRepository) {
        this.doneRepository = doneRepository;
    }

    @Autowired
    public void setBlockedRepository(BlockedRepository blockedRepository) {
        this.blockedRepository = blockedRepository;
    }

}
