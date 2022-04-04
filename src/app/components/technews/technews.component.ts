import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.servise';
import { News } from '../../models/news';

@Component({
  selector: '<app-technews>',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.scss'],
})
export class TechNewsComponent implements OnInit {
  searchItem: string = '';
  displayTechNews: Array<News> = [];

  constructor(private httpServise: HttpService) {}

  ngOnInit(): void {
    this.httpServise.getTechNews().subscribe((response) => {
      console.log(response);
      this.displayTechNews = response.articles;
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
