package com.example.demo.Service;

import com.example.demo.Entity.Project;
import com.example.demo.Entity.Task;
import com.example.demo.Repository.ProjectRespository;
import com.example.demo.Repository.TaskRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.data.domain.Page;

import java.util.List;

public interface IProjectService {


    public List<Project> GetAllProject();


    public  Project AddProject(Project project);

    public void DeleteProject(Long id);

    public Project UpdateProject(Long id, Project projectdetails);

    Page<Task> getTasksByProjectId(Long projectId, int page, int size);


    public List<Task> filtrerParStatut(String status) ;


    public List<Task> rechercherParTitre(String keyword) ;




}
