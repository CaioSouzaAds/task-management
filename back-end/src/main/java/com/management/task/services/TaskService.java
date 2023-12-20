package com.management.task.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.management.task.dto.TaskDTO;
import com.management.task.entities.Task;
import com.management.task.repositories.TaskRepository;

@Service
public class TaskService {

	@Autowired
	private TaskRepository repository;

	@Transactional(readOnly = true)
	public List<TaskDTO> findAll() {
		List<TaskDTO> dtoList = repository.findAll().stream().map(TaskDTO::new).collect(Collectors.toList());

		return dtoList;
	}

	@Transactional
	public TaskDTO createTask(TaskDTO taskDTO) {
		Task newTask = new Task();

		newTask.setName(taskDTO.getName());
		newTask.setStatus(taskDTO.getStatus());
		newTask.setImage(taskDTO.getImage());

		Task savedTask = repository.save(newTask);

		return new TaskDTO(savedTask);
	}

}
