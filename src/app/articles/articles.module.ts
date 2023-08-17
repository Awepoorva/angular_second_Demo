import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { HomeComponent } from './home/home.component';
import { ViewArticlesComponent } from './view-articles/view-articles.component';
import { CreateArticlesComponent } from './create-articles/create-articles.component';
import { ListtitleComponent } from './listtitle/listtitle.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    ViewArticlesComponent,
    CreateArticlesComponent,
    ListtitleComponent,
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class ArticlesModule { }
