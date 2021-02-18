import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolist';
  items = [
    {label : 'item1',
      id : Date(),
    done : false }
    ] ;

  // Write code to push new item
  submitNewItem(newToDoLabel: any) {
   let newToDo = {
      label : newToDoLabel.value,
     id: Date(),
      done : false
    };
    this.items.push(newToDo);
  }

  // Write code to complete item
  completeItem(todo: any) {
  // this.items=this.items.filter(t=>t.label!==todolabel);
    // todo.done = true;
    // todo.innerHTML = '<strike>{{todo.label}}</strike>';
    this.items.map((item) => {
      if (item.id === todo.id) {
        item.done = !item.done;
      }
    });
  }

  // Write code to delete item
  deleteItem(todo: { id: string; }) {
    this.items = this.items.filter(t => t.id !== todo.id);

  }
}
