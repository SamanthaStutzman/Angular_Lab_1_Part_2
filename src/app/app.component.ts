import { Component } from '@angular/core';

export interface ITodo {
  completed: boolean;
  task: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{ 
  todoArray : ITodo[] = [
    { completed: true, task: "finish lab" },
    { completed: false, task: "sleep" },
    { completed: true, task: "work" }
  ]
  
  newTodo : string;
  removeTodo : any;
  
  addTask(value : string) {  
    
    if (value !== "") {
      
      // this.todoArray.push({task:value, completed:false})
      
      this.todoArray = [...this.todoArray, {task:value, completed:false}];
      
      console.log(this.todoArray)    
      
    }
    
    // value = ""
    this.newTodo = "";
    
  }
  
  // how do I select the index
  removeTask(index) {
    this.todoArray.splice(index, 1);
  }
  
}