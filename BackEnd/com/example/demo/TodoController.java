package com.example.demo;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TodoController {
	
	private List<Todo> todos = new ArrayList<Todo>();
	private final AtomicLong counter = new AtomicLong();
	
	public TodoController() {
		todos.add(new Todo(1,"Dog"));
		todos.add(new Todo(2,"Cat"));
	}
	
	@GetMapping("/say")
	public List<Todo> getTodo() {
		return todos;
	}
	
	///  id  -- ..../say/1234
	@GetMapping("/say/{id}")
	public Todo getTodoById(@PathVariable long id) {
		return todos.stream().filter(resutl -> resutl.getId() == id)
				.findFirst().orElseThrow(() -> new ToDoNotFoundException(id));
	}
	
	/// name -- ..../say/search?name=hello
	@GetMapping("/say/search")
	public String getTodoByName(@RequestParam(defaultValue = "Good") String name) {
		return "search: " + name;
	}
	
	@ResponseStatus(HttpStatus.CREATED)
	@PostMapping("/say")
	public void addTodo(@RequestBody Todo todo) {
		todos.add(new Todo(counter.getAndIncrement(),todo.getName()));
	}
	
	//Support java 9+
	/*
	 * @PutMapping("/say/{id}") public void editTodo(@RequestBody Todo
	 * todo, @PathVariable long id) { return todos.stream().filter(resutl ->
	 * resutl.getId() == id).findFirst().ifPresentOrElse (result) -> {
	 * result.setName(todo.getName()); }, () -> {
	 * 
	 * }); }
	 */
	/*
	 * @DeleteMapping("/say/{id}") public void editTodo(@RequestBody Todo
	 * todo, @PathVariable long id) { return todos.stream().filter(resutl ->
	 * resutl.getId() == id).findFirst().ifPresentOrElse (result) -> {
	 * result.setName(todo.getName()); }, () -> {
	 * 
	 * }); }
	 */
	 
	
}
