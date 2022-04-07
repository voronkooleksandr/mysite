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
import { ActivatedRoute, Params } from '@angular/router';

import { Observable, Subscription } from 'rxjs';
import { Fotos } from 'src/app/models/fotos';
import { News } from 'src/app/models/news';
import { HttpService } from 'src/app/services/http.servise';


@Component({
  selector: '<app-user-info>',
  templateUrl: './detailednews.component.html',
  styleUrls: ['./detailednews.component.scss']
})
export class DetailednewsComponent implements OnInit {

  // id!: number;
  foto:   any | {} ;
  // subs = new Subscription();

  constructor (
    private httpService: HttpService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
  // this.route.params.subscribe((params: Params) => {
  //   this.id = params['id']});
  //   console.log(this.id);
  //   this.foto = this.httpService.getFotosId(this.id)

    const id = this.route.snapshot.paramMap.get('id')!;
    this.httpService.getFotosId(+id).subscribe((data) => {
      this.foto = data;
    });

  }
}



//   //   this.httpService.getDetailNews(this.author).subscribe(
//   //     (data: News)
//   //   )
//   // })

//   // const id = this.route.snapshot.paramMap.get('author')!;
//   //   this.httpService.getDetailNews('author').subscribe((data: any) => {
//   //     this.news = data;
//   //   });




// }

