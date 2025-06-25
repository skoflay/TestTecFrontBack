import { Component, OnInit } from '@angular/core';
import { ProjectService } from './services/project.service';
import { Project } from './models/project.model';

@Component({
  selector: 'app-root',
  template: `
    <h1>Liste des projets</h1>
    <button (click)="loadProjects()">Charger projets</button>
    <ul>
      <li *ngFor="let p of projects">
        {{p.name}} ({{p.description}})
      </li>
    </ul>
  `
})
export class AppComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit() {}

  loadProjects() {
    this.projectService.getAllProjects().subscribe(
      data => this.projects = data,
      err => console.error('Erreur:', err)
    );
  }
}
