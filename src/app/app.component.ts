import { Component } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private http: HttpClient) { }

  searchText = '';
  apiUrl = 'https://www.googleapis.com/books/v1/volumes'
  title = 'Book Collection';

  searchBook(searchText: string) {
    searchText = searchText.trim();

    // Add safe, URL encoded search parameter if there is a search term
    const options = searchText ?
      {
        params: new HttpParams({
          fromObject: {
            'key': environment.google.apikey,
            'q': searchText
          }
        })
      } : {};

    this.http.get('https://www.googleapis.com/books/v1/volumes', options)
      .subscribe(data => {
        console.log("data ", data);
      })

  }
}
