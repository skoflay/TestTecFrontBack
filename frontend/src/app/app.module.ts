import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';

const routes: Routes = [
  { path: '', component: ProjectListComponent },
  { path: 'tasks/:id', component: TaskListComponent },
  { path: 'tasks/:id/add', component: TaskFormComponent },
  { path: 'tasks/:id/edit/:taskId', component: TaskFormComponent }
];

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    AppComponent,
    ProjectListComponent,
    TaskListComponent,
    TaskFormComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
