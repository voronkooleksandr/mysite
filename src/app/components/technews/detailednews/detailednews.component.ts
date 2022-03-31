import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { News } from '../../../models/news';
import { first, Subscription } from 'rxjs';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: '<app-detailednews>',
  templateUrl: './detailednews.component.html',
  styleUrls: ['./detailednews.component.scss']
})
export class DetailednewsComponent implements OnInit {

  detail: any | {};
  subs = new Subscription();
  detailNews: any;
  news: News | null = null;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private httpService: HttpService) {
    
   }


  ngOnInit(): void {
    this.activatedRoute.params.pipe(first()).subscribe(({author}) => {
      console.log(author);
      this.getDetailedNews(author);
    });
     
  }

  getDetailedNews(author: string) {
    this.httpService.getDetailedNews(author).subscribe((resp) => {
      this.detailNews = resp;
      console.log(this.detailNews);
    });
  }

  goBack() {
    this.router.navigate(['technews']);
  }

  onSelect (news: any) {
    this.router.navigate(['/technews', news.author]);
  }
  
}
