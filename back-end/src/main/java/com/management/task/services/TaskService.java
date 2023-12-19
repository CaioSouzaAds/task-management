package com.management.task.services;

import java.io.Serializable;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.management.task.entities.Task;
import com.management.task.repositories.TaskRepository;

@Service
public class TaskService implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Autowired
	private TaskRepository repository;
	
	public List<Task> findAll() {
		return repository.findAll();
	}

}
