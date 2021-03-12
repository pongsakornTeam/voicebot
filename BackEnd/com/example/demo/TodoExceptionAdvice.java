package com.example.demo;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

public class TodoExceptionAdvice {
	
	
	@ResponseBody
	@ExceptionHandler
	@ResponseStatus
	String todoNotFound(ToDoNotFoundException ex) {
		return ex.getMessage();
	}
}
