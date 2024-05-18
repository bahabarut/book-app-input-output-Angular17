import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  @Input() Name: string = "";
  @Input() Surname: string = "";
  @Input() Text: string = "";

  @Output() logEvent: EventEmitter<string> = new EventEmitter<string>();

  LogEventEmit(consoleText: string) {
    this.logEvent.emit(consoleText);
  }
}
