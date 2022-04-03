import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';

import { News } from '../../models/news';

import { HttpService } from '../../services/http.service';

@Component({
  selector: '<app-technews>',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.scss']
})
export class TechNewsComponent implements OnInit {
  searchItem: string = "";
  displayTechNews: any[] = [];

  constructor(private httpServise: HttpService) { }

  ngOnInit(): void {
    this.httpServise.getTechNews().subscribe((response: any) => {
      console.log(response);
      this.displayTechNews = response.articles;
    })
  }

  search(event: any ) {
    this.searchItem = (event.target as HTMLInputElement).value;
    this.httpServise.search.next(this.searchItem);
  }

  clean (event: any) {
    this.searchItem = (event.target as HTMLInputElement).value;
    console.log(this.searchItem);
    this.httpServise.search.next(this.searchItem);
  }

}

