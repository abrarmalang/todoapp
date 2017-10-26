package com.demo.todo;


import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


@Entity
@Data
public class Todo {
  @Id
  @GeneratedValue
  Long id;
  String title;
  Boolean complete;

  public Todo(){

  }

  public Todo(Long id, String title, Boolean complete) {
    this.id = id;
    this.title = title;
    this.complete = complete;
  }
}
