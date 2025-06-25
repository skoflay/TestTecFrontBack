package com.example.demo.Service.Impl;

import com.example.demo.Entity.Project;
import com.example.demo.Entity.Task;
import com.example.demo.Repository.ProjectRespository;
import com.example.demo.Repository.TaskRepository;
import com.example.demo.Service.IProjectService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProjectServiceImpl implements IProjectService {


    private final ProjectRespository projectRespository;
    private final TaskRepository taskRepository;


    public ProjectServiceImpl(ProjectRespository projectRespository, TaskRepository taskRepository) {
        this.projectRespository = projectRespository;
        this.taskRepository = taskRepository;

    }

    public List<Project> GetAllProject(){

        return projectRespository.findAll();
    }


    public  Project AddProject(Project project){

        return projectRespository.save(project);
    }

   public void DeleteProject(Long id){

        projectRespository.deleteById(id);
   }

   public Project UpdateProject(Long id, Project projectdetails){

       Project project = projectRespository.findById(id)
               .orElseThrow(() -> new EntityNotFoundException("Project not found with id: " + id));

        project.setName(projectdetails.getName());
        project.setDescription(projectdetails.getDescription());
        project.setStartDate(projectdetails.getStartDate());
        project.setEndDate(projectdetails.getEndDate());


       return projectRespository.save(project);


   }

    public Page<Task> getTasksByProjectId(Long projectId, int page, int size) {
        return taskRepository.findByProjectId(projectId, PageRequest.of(page, size));
    }


    public List<Task> filtrerParStatut(String status) {
        return taskRepository.findByStatus(status);
    }


    public List<Task> rechercherParTitre(String keyword) {
        return taskRepository.findByTitleContainingIgnoreCase(keyword);
    }





}
