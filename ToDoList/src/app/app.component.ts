import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toDoInput: string = "";
  todos = [];

createToDo() {
  const trimmedInput = this.toDoInput.trim();
  console.log(this.toDoInput);
  if (trimmedInput.length >= 1){
    this.todos.push(this.toDoInput);
    }
  else {

  }
  this.toDoInput=""; 

  //code that will create a todo
}

editToDo(todo) {
  let index = this.todos.indexOf(todo);
  console.log(index);
  this.todos[index] = prompt("Please edit my existance", this.todos[index]);
}

deleteToDo(todo) {
  let index = this.todos.indexOf(todo);
  this.todos.splice(index, 1);
  //deletes todo
}
}