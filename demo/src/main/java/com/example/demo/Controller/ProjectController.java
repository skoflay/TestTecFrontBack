package com.example.demo.Controller;


import com.example.demo.Entity.Project;
import com.example.demo.Entity.Task;
import com.example.demo.Service.IProjectService;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/projects")
public class ProjectController {

  private final IProjectService projectService;


    public ProjectController(IProjectService projectService) {
        this.projectService = projectService;
    }


    @GetMapping
    public List<Project> GetAllProject(){

        return projectService.GetAllProject();
    }
    @PostMapping
    public Project addProject(@RequestBody Project project) {
        return projectService.AddProject(project);
    }


    @PutMapping("/{id}")
    public Project updateProject(@PathVariable Long id, @RequestBody Project projectDetails) {
        return projectService.UpdateProject(id, projectDetails);
    }


    @DeleteMapping("/{id}")
    public void deleteProject(@PathVariable Long id) {
        projectService.DeleteProject(id);
    }

    @GetMapping("/{id}/tasks")
    public Page<Task> getTasksByProject(
            @PathVariable Long id,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "5") int size
    ) {
        return projectService.getTasksByProjectId(id, page, size);
    }

    @GetMapping("/tasks/search")
    public List<Task> searchTasks(
            @RequestParam(required = false) String status,
            @RequestParam(required = false) String title) {

        if (status != null) {
            return projectService.filtrerParStatut(status);
        } else if (title != null) {
            return projectService.rechercherParTitre(title);
        } else {
            return List.of();
        }

    }

    @GetMapping("/search")
    public List<Task> rechercherParTitre(@RequestParam(required = false) String title,
                                         @RequestParam(required = false) String status) {
        if (title != null) {
            return projectService.rechercherParTitre(title);
        } else if (status != null) {
            return projectService.filtrerParStatut(status);
        } else {
            return List.of();
        }
    }





}
