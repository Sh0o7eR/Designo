import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './features/home-page/home-page.component';
import {WebDesignComponent} from './features/web-design/web-design.component';
import {AppDesignComponent} from './features/app-design/app-design.component';
import {GraphicDesignComponent} from './features/graphic-design/graphic-design.component';
import {AboutComponent} from './features/about/about.component';
import {LocationsComponent} from './features/locations/locations.component';
import {ContactComponent} from './features/contact/contact.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'webdesign', component: WebDesignComponent},
  {path: 'appdesign', component: AppDesignComponent},
  {path: 'graphicdesign', component: GraphicDesignComponent},
  {path: 'about', component: AboutComponent},
  {path: 'locations', component: LocationsComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
