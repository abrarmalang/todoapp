import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Todo } from './todo';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const HOST = 'http://localhost:8080';
const ENTITY = 'todos';
const URL = HOST + '/' + ENTITY;

@Injectable()
export class BackendService  {

  constructor(private http:Http) { }

  all(): Observable<Todo[]> {
    return this.http
      .get(URL)
      .map(res => res.json()); 
  }

  get(id: number) {
    return this.http
      .get(URL + '/'+ id)
      .map(response => {
        return new Todo(response.json());
      });  
  } 

  save(todo: Todo) {
    return this.http
      .post(URL,todo)
      .map(res => res.json());
  }

  update(todo: Todo){
    /*
    console.log('updating message ' + todo);
    return this.save(todo);
    */ 
    return this.http
      .put(URL + '/' + todo.id, todo)
      .map(response => {
        return new Todo(response.json());
      });

  }

  delete(todo: Todo){
    return this.http
      .delete(URL + '/'+ todo.id);      
  }



}
