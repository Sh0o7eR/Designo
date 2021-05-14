import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './features/home-page/home-page.component';
import {WebDesignComponent} from './features/web-design/web-design.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'webdesign', component: WebDesignComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
