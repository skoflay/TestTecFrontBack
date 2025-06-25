import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';
import { Task } from '../models/task.model';
import { Page } from '../models/page.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = 'http://localhost:8080/projects';

  constructor(private http: HttpClient) {}

  getAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrl);
  }

  addProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this.apiUrl, project);
  }

  updateProject(id: number, project: Project): Observable<Project> {
    return this.http.put<Project>(`${this.apiUrl}/${id}`, project);
  }

  deleteProject(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getTasksByProjectId(id: number, page: number, size: number): Observable<Page<Task>> {
    const params = new HttpParams().set('page', page.toString()).set('size', size.toString());
    return this.http.get<Page<Task>>(`${this.apiUrl}/${id}/tasks`, { params });
  }

  addTask(projectId: number, task: Task): Observable<Task> {
    return this.http.post<Task>(`${this.apiUrl}/${projectId}/tasks`, task);
  }

  updateTask(projectId: number, taskId: number, task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/${projectId}/tasks/${taskId}`, task);
  }

  searchTasks(status?: string, title?: string): Observable<Task[]> {
    let params = new HttpParams();
    if (status) {
      params = params.set('status', status);
    }
    if (title) {
      params = params.set('title', title);
    }
    return this.http.get<Task[]>(`${this.apiUrl}/search`, { params });
  }
}
