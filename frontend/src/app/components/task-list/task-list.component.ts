import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Task } from '../../models/task.model';
import { Page } from '../../models/page.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  projectId: number;
  currentPage = 0;
  pageSize = 5;
  totalPages = 0;

  constructor(private projectService: ProjectService, private route: ActivatedRoute) {
    this.projectId = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.projectService.getTasksByProjectId(this.projectId, this.currentPage, this.pageSize).subscribe((data: Page<Task>) => {
      this.tasks = data.content;
      this.totalPages = data.totalPages;
    });
  }

  changePage(page: number): void {
    if (page >= 0 && page < this.totalPages) {
      this.currentPage = page;
      this.loadTasks();
    }
  }
}
