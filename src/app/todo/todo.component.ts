import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {ITodo} from 'src/app/app.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit, ITodo {

  @Input()
  completed : boolean;

  @Input()
  task : string;

    
  @Output() deleted = new EventEmitter();


  completedClassList : any;

  constructor() { }


  onDelete() {
    this.deleted.emit();
  }

  completeTask() {
    this.completed = true; 
  }

  ngOnInit() {
  }

}