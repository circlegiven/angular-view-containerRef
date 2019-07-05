import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-message',
  template: `<h2>{{message}}</h2> <button (click)="onClickDelete()">delete</button>
  `
})
export class MessageComponent {

  @Input()
  message: string;

  @Output()
  deleteEvent = new EventEmitter();


  onClickDelete() {
    this.deleteEvent.emit()
  }

}
