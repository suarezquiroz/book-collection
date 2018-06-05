import { Component, OnInit, Input } from '@angular/core';
import { BookComponent } from "./book/book.component";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  @Input() bookList: any[] = [];
  constructor() { }

  ngOnInit() {
  }

}
