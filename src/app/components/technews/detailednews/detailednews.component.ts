// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
// import { News } from '../../../models/news';
// import { HttpService } from 'src/app/services/http.servise';
// import { Subscription } from 'rxjs';

// @Component({
//   selector: '<app-detailednews>',
//   templateUrl: './detailednews.component.html',
//   styleUrls: ['./detailednews.component.scss'],
// })
// export class DetailednewsComponent implements OnInit {
//   detailNews: string = "";
//   subs = new Subscription()


//   constructor(
//     private route: ActivatedRoute,
//     private router: Router,
//     private httpService: HttpService
//   ) {}

//   ngOnInit(): void {
//     // this.activatedRoute.params.pipe(first()).subscribe(({author}) => {
//     //   console.log(author);
//     //   this.getDetailedNews(author);
//     // });

//     //const title = this.route.snapshot.paramMap.get('title');
//     this.httpService.getDetailNews('title').subscribe((data: any) => {
//       this.detailNews = data.articles;
//       console.log(this.detailNews = data);
//     });
//   }

//   // getDetailedNews(author: string) {
//   //   this.httpService.getDetailedNews(author).subscribe((resp: any) => {
//   //     this.detailNews = resp;
//   //     console.log(this.detailNews);
//   //   });
//   // }

//   ngOnDestroy() {
//     this.subs.unsubscribe();
//   }

//   goBack() {
//     this.router.navigate(['technews']);
//   }

//   onSelect(news: any) {
//     this.router.navigate(['/technews', news.author]);
//   }
// }


import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.servise';


@Component({
  selector: '<app-user-info>',
  templateUrl: './detailednews.component.html',
  styleUrls: ['./detailednews.component.scss']
})
export class DetailednewsComponent implements OnInit {
  news: any | {};
  subs = new Subscription();

  constructor(
    private httpService: HttpService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): any {
    const author = this.route.snapshot.paramMap.get('author')!;
    this.httpService.getDetailNews(author).subscribe((data) => {
      this.news = data;
    });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}


function id(id: any) {
  throw new Error('Function not implemented.');
}

