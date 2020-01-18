import { Pipe, PipeTransform } from '@angular/core';
import {ITodo} from 'src/app/app.component';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(todosArray: ITodo[], filterText): any {

    if ( !filterText ) {
      return todosArray;
    }

    return todosArray.filter( todo => {return todo.task.includes(filterText);})
    
  }

}
