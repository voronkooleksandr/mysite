import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private translateServise: TranslateService) { }

  ngOnInit(): void {
  }

  changeLang (event: any) {
    this.translateServise.use(event.target.value);
  }

}
