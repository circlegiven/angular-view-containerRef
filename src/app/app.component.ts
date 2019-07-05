import {Component, ComponentFactoryResolver, ComponentRef, OnDestroy, ViewChild, ViewContainerRef} from '@angular/core';
import {MessageComponent} from './message/message.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  entryComponents:[MessageComponent] // 여기서 messageComponent를 넣어줘야한다.
})
export class AppComponent implements OnDestroy{
  title = 'app';

  @ViewChild('messagecontainer', {read: ViewContainerRef})
  entry: ViewContainerRef;

  entryRef: ComponentRef<MessageComponent>;

  constructor(private resolver : ComponentFactoryResolver) {

  }

  ngOnDestroy(): void {
    this.entryRef.destroy();
  }

  createComponent(title: string) {

    // 1. clear container
    this.entry.clear();

    // 2. Create a factory for messageComponent
    const factory = this.resolver.resolveComponentFactory(MessageComponent);

    // 3. Create component using factory
    this.entryRef = this.entry.createComponent(factory);

    // 4. Pass value for @Input properties using component reference instance method
    this.entryRef.instance.message = title;

    // get output event from subscribing to delete event (output)
    this.entryRef.instance.deleteEvent.subscribe(() => {
      this.entryRef.destroy();
    })

  }

}
