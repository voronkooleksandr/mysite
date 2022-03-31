import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';

import { News } from '../../models/news';

import { HttpService } from '../../service/http.service';

@Component({
  selector: '<app-technews>',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.scss']
})
export class TechNewsComponent implements OnInit {
  detail: any | {};
  public detailId: string | null | undefined ;
  news: News[] | null = null;
  displayTechNews: any[] = [];
  searchItem: string = "";

  constructor(private router: Router, private httpServise: HttpService) { }


  ngOnInit(): void {
    this.httpServise.getTechNews().subscribe((data: any) => {
      this.displayTechNews = data.articles;
    }, (error: any) => {
      console.log(error);
    });

       this.httpServise.search.subscribe((value: string) => {
      this.searchItem = value;
    })
  }

  search(event: any ) {
    this.searchItem = (event.target as HTMLInputElement).value;
    console.log(this.searchItem);
    this.httpServise.search.next(this.searchItem);
  }

  clean (event: any) {
    this.searchItem = (event.target as HTMLInputElement).value;
    console.log(this.searchItem);
    this.httpServise.search.next(this.searchItem);
  }

  // onSelect (news: any) {
  //   this.router.navigate(['/technews', news.author]);
  // }
    
}

