import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Task } from './../../models/task.model';
import { TasksProvider } from './../../providers/tasks/tasks';

@IonicPage()
@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html',
})
export class TasksPage {

  tasks: Task[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private tasksProvider: TasksProvider
  ) {
  }

  ionViewDidLoad() {
    this.tasksProvider.getAll()
    .subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  updateTask(task: Task, position: number){
    console.log('antes', task);
    const updateTask = {
      ...task
    };
    updateTask.title = 'otro titulo';
    this.tasksProvider.update(updateTask)
    .subscribe(responseTask => {
      console.log('despues', responseTask);
      this.tasks[position] = responseTask;
    });
  }

  deleteTask(task: Task, position: number) {
    console.log('deleteTask');
    this.tasksProvider.remove(task)
    .subscribe(() => {
      this.tasks.splice(position, 1);
    });
  }

}
