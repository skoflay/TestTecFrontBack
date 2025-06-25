package com.example.demo.Repository;

import com.example.demo.Entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRespository extends JpaRepository<Project,Long> {


}
