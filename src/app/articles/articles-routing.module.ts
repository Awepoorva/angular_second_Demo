import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListtitleComponent } from './listtitle/listtitle.component';
import { ViewArticlesComponent } from './view-articles/view-articles.component';
import { CreateArticlesComponent } from './create-articles/create-articles.component';

const routes: Routes = [{ path: 'articles/home', component: HomeComponent },
{ path: 'articles/createArticle', component: CreateArticlesComponent },
{ path: 'articles/viewArticle', component: ViewArticlesComponent },
{ path: 'articles/listTitle', component: ListtitleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
