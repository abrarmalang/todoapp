package com.demo.todo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;

@RestController
public class TodoController {
  private final Logger LOG = LoggerFactory.getLogger(TodoController.class);
  private TodoRepository todoRepository;

  public TodoController(TodoRepository taskService) {
    this.todoRepository = taskService;
  }

  @GetMapping(value = {"", "/todos"})
  public Iterable<Todo> list(HttpServletResponse response) {
    return todoRepository.findAll();
  }

  @DeleteMapping("/todos/{id}")
  public void delete(@PathVariable("id") Long id) {
    todoRepository.delete(id);
  }


  @PostMapping("/todos")
  public Todo save(@RequestBody Todo todo
          , HttpServletResponse response) {
    LOG.debug("save {}", todo.id);
    return todoRepository.save(todo);
  }


}
