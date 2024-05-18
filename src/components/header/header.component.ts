import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { BookModel } from '../../models/book-model.interface';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, MatBadgeModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input({ required: true }) categories: string[] = [];
  @Input({ required: true }) basket: BookModel[] = [];

  @Output() filterEv: EventEmitter<string> = new EventEmitter<string>();
  FilterEventEmit(filter: string) {
    this.filterEv.emit(filter);
  }
}
