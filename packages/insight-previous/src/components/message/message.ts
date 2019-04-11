import { Component, Input } from '@angular/core';

@Component({
  selector: 'message',
  templateUrl: 'message.html'
})
export class MessageComponent {
  @Input()
  public message: string;
  @Input()
  public type: string;
}
