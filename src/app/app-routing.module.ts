import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ListtitleComponent } from './articles/listtitle/listtitle.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'articles/home',
    pathMatch: 'full'
  },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contactus', component: ContactusComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
