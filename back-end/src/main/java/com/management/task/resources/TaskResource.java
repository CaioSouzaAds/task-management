package com.management.task.resources;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.management.task.dto.TaskDTO;
import com.management.task.services.TaskService;

@RestController
@RequestMapping(value = "/tasks")
public class TaskResource {

	@Autowired
	private TaskService service;

	@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")
	@GetMapping
	public ResponseEntity<List<TaskDTO>> findAll() {
		List<TaskDTO> dtoList = service.findAll();
		return ResponseEntity.ok().body(dtoList);
	}

	@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")
	@PostMapping
	public ResponseEntity<TaskDTO> createTask(@RequestBody TaskDTO taskDTO) {
		TaskDTO createdTask = service.createTask(taskDTO);

		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdTask.getId())
				.toUri();

		return ResponseEntity.created(uri).body(createdTask);
	}

	@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")
	@PutMapping(value = "/{id}")
	public ResponseEntity<TaskDTO> UpTask(@PathVariable Long id, @RequestBody TaskDTO taskDTO) {
		TaskDTO createdTask = service.update(id, taskDTO);

		return ResponseEntity.ok().body(createdTask);
	}
}
