import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { BookModel } from '../../models/book-model.interface';
import { FilterPipe } from '../../pipes/filter.pipe';
import { StarComponent } from '../star/star.component';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatBadgeModule, FilterPipe, StarComponent],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss'
})
export class BookCardComponent {
  @Input({ required: true }) bookList: BookModel[] = [];
  @Input({ required: true }) categoryName: string = "";

  @Output() bookEvent: EventEmitter<BookModel> = new EventEmitter<BookModel>();

  EmitBookEvent(book: BookModel) {
    this.bookEvent.emit(book)
  }
}
