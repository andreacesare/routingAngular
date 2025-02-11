import {Component, computed, inject, input, signal} from '@angular/core';

import { TaskComponent } from './task/task.component';
import { Task } from './task/task.model';
import {TasksService} from "./tasks.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, RouterLink],
})
export class TasksComponent {
  userId=input.required<string>();
  private tasksService:TasksService=inject(TasksService);
  //order=input<'asc'|'desc'>();
  order=signal<'asc'|'desc'>('desc');

  userTasks=computed(()=>
    this.tasksService
      .allTasks()
      .filter(t=>t.userId===this.userId())
      .sort((a,b)=>{
        if(this.order()==='desc'){return a.id>b.id?-1:1;}
        else{return a.id>b.id?1:-1;}
      }

      )

  );

}
