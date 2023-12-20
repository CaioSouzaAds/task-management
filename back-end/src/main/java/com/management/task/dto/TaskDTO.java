package com.management.task.dto;

import java.io.Serializable;
import java.time.Instant;

import com.management.task.entities.Task;

public class TaskDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private Long id;
    private String name;
    private Boolean status;
    private String image;
    private Instant createdAt;
    private Instant updatedAt;

    // Construtores, getters e setters

    public TaskDTO() {
    }

    public TaskDTO(Long id, String name, Boolean status, String image, Instant createdAt, Instant updatedAt) {
        this.id = id;
        this.name = name;
        this.status = status;
        this.image = image;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    
    public TaskDTO(Task task) {
        this.id = task.getId();
        this.name = task.getName();
        this.status = task.getStatus();
        this.image = task.getImage();
        this.createdAt = task.getCreatedAt();
        this.updatedAt = task.getUpdatedAt();
    }

    // Getters e setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Instant createdAt) {
        this.createdAt = createdAt;
    }

    public Instant getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Instant updatedAt) {
        this.updatedAt = updatedAt;
    }
}
