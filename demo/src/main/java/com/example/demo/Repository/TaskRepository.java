package com.example.demo.Repository;


import com.example.demo.Entity.Task;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TaskRepository extends JpaRepository<Task,Long> {

    Page<Task> findByProjectId(Long projectId, Pageable pageable);
    List<Task> findByStatus(String status);
    List<Task> findByTitleContainingIgnoreCase(String title);

}
