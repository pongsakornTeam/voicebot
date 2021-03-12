package com.example.demo;

public class ToDoNotFoundException extends RuntimeException {
	public ToDoNotFoundException() {

	}

	public ToDoNotFoundException(long id) {
		super("Could not found id " + id);
	}
}
