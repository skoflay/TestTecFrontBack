import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from '../../services/project.service';
import { Task } from '../../models/task.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  taskForm: FormGroup;
  projectId: number;
  taskId?: number;
  isEditMode = false;

  constructor(
    private fb: FormBuilder,
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.projectId = Number(this.route.snapshot.params['id']);
    this.taskId = Number(this.route.snapshot.params['taskId']) || undefined;
    this.isEditMode = !!this.taskId;
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    if (this.isEditMode) {
      this.projectService.getTasksByProjectId(this.projectId, 0, 100).subscribe((data) => {
        const task = data.content.find((t) => t.id === this.taskId);
        if (task) {
          this.taskForm.patchValue(task);
        }
      });
    }
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      const task: Task = {
        ...this.taskForm.value,
        projectId: this.projectId
      };
      if (this.isEditMode) {
        this.projectService.updateTask(this.projectId, this.taskId!, task).subscribe(() => {
          this.router.navigate(['/tasks', this.projectId]);
        });
      } else {
        this.projectService.addTask(this.projectId, task).subscribe(() => {
          this.router.navigate(['/tasks', this.projectId]);
        });
      }
    }
  }
}
