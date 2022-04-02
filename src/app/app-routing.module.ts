import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechNewsComponent } from './components/technews/technews.component';
import { TopheadingComponent } from './components/topheading/topheading.component';
import {DetailednewsComponent} from './components/technews/detailednews/detailednews.component'
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "topnews", component: TopheadingComponent},
  {path: "technews", component: TechNewsComponent},
  {path: "technews/:author", component: DetailednewsComponent },
  {path: 'notfound', component: NotfoundComponent},
  {path: '**', redirectTo: "/notfound" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
