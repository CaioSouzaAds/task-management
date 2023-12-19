package com.management.task.resources;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.management.task.entities.Task;
import com.management.task.services.TaskService;

@RestController
@RequestMapping(value = "/tasks")
public class TaskResource {
	
	@Autowired
	private TaskService service;
	
	@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")
	@GetMapping
	public ResponseEntity<List<Task>> findAll(){
		List<Task> list = service.findAll();
		
		return ResponseEntity.ok().body(list);
	}
}
