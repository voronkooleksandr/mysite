import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fotos } from 'src/app/models/fotos';
import { HttpService } from 'src/app/services/http.servise';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: '<app-technews>',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.scss'],
})
export class TechNewsComponent implements OnInit {

  searchItem: string = '';
  fotosList: Fotos[] = [];
  start = 0;
  page: number = 1;

  constructor(private httpServise: HttpService,
    private router: Router) {}

  ngOnInit(): void {

      this.httpServise
      .getFotos(this.start)
      .subscribe((data: any) => {
        this.fotosList = data;
        console.log(this.fotosList);
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

  onClickDetailNews (author: string) {
    this.router.navigate(['/technews', `${author}`]);
    console.log(this.router.navigate(['/technews/', `${author}`]));

  }

}

