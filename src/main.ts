import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import {provideRouter, withComponentInputBinding} from "@angular/router";
import {TasksComponent} from "./app/tasks/tasks.component";
import {routes} from "./app/app.routes";

bootstrapApplication(AppComponent,{
  providers:[
    provideRouter(routes,withComponentInputBinding())
  ]
}).catch((err) => console.error(err));
