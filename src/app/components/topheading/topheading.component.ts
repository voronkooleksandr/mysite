import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.servise';

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.scss'],
})
export class TopheadingComponent implements OnInit {
  searchItem: string = '';
  displayNews: any[] = [];

  constructor(private httpServise: HttpService) {}

  ngOnInit(): void {
    this.httpServise.getAllNews().subscribe((response: any) => {
      console.log(response);
      this.displayNews = response.articles;
    });
  }

  search(event: any) {
    this.searchItem = (event.target as HTMLInputElement).value;

    this.httpServise.search.next(this.searchItem);
  }

  clean(event: any) {
    this.searchItem = (event.target as HTMLInputElement).value;
    console.log(this.searchItem);
    this.httpServise.search.next(this.searchItem);
  }
}
