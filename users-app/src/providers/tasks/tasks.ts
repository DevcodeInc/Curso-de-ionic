import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Task } from './../../models/task.model';

@Injectable()
export class TasksProvider {

  path = 'https://jsonplaceholder.typicode.com/todos';

  constructor(public http: HttpClient) {
    console.log('Hello TasksProvider Provider');
  }

  getAll(){
    return this.http.get<Task[]>(`${this.path}`);
  }

  update(task: Task){
    return this.http.put<Task>(`${this.path}/${task.id}`, task);
  }

  remove(task: Task) {
    return this.http.delete(`${this.path}/${task.id}`);
  }

}
