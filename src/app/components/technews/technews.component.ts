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
  fotoslist: Fotos[] = [];
  start = 0;
  data = 5;

  constructor(private httpServise: HttpService,
    private router: Router,
    private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
      this.httpServise
      .getFotos(this.start)
      .subscribe((data: any) => (this.fotoslist = data));
      console.log(this.fotoslist);

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

  @HostListener('document:scroll')
  onScroll() {
    if (!this.start) {
      this.start += 5;
      this.httpServise
        .getFotosId(this.start)
        .subscribe((data: any) => (this.fotoslist = this.fotoslist.concat(data)));
    }
  }



}

