import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private httpServise: HttpService, private router: Router) {}

  ngOnInit(): void {
    this.httpServise.getTechNews().subscribe((response: any) => {
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

  // onClickDetailNews (title: string) {
  //   this.router.navigate(['/features', `${title}`]);
  //   console.log(this.router.navigate(['/features/us', `${title}`]));
  // }

}
