import { Component } from '@angular/core';
import { BookModel } from '../../models/book-model.interface';
import { BookData } from '../../models/book-data.const';
import { RouterModule } from '@angular/router';
import { Categories } from '../../models/category-data.const';
import { BookCardComponent } from '../book-card/book-card.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterModule, BookCardComponent, HeaderComponent, FooterComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  bookList: BookModel[] = BookData;
  basket: BookModel[] = [];
  categories: string[] = [];
  categoryName: string = "all";

  ngOnInit(): void {
    this.categories = Object.keys(Categories);
  }

  FilterBook(catName: string) {
    this.categoryName = catName;
  }

  AddToBasket(book: BookModel) {
    var SepetteVarMi = this.basket.indexOf(book);
    if (SepetteVarMi == -1)
      this.basket.push(book);
  }


  PrintLogConsole(ev: string) {
    console.log(ev);
  }
}
