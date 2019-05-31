import {Component, ComponentFactoryResolver, ViewChild, ViewContainerRef} from '@angular/core';
import {MessageComponent} from './message/message.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  entryComponents:[MessageComponent] // 여기서 messageComponent를 넣어줘야한다.
})
export class AppComponent {
  title = 'app';

  @ViewChild('messagecontainer', {read: ViewContainerRef})
  entry: ViewContainerRef;

  constructor(private resolver : ComponentFactoryResolver) {

  }

  createComponent(title: string) {

    // 1. clear container
    this.entry.clear();

    // 2. Create a factory for messageComponent
    const factory = this.resolver.resolveComponentFactory(MessageComponent);

    // 3. Create component using factory
    const componentRef = this.entry.createComponent(factory);

    // 4. Pass value for @Input properties using component reference instance method
    componentRef.instance.message = title;

  }
}
