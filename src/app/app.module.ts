import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HomePageComponent } from './features/home-page/home-page.component';
import { FooterComponent } from './core/footer/footer.component';
import { CtaComponent } from './shared/cta/cta.component';
import { WebDesignComponent } from './features/web-design/web-design.component';
import { CardWebDesignComponent } from './shared/card-web-design/card-web-design.component';
import { ContSkillComponent } from './shared/cont-skill/cont-skill.component';
import { HeroComponent } from './shared/hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    FooterComponent,
    CtaComponent,
    WebDesignComponent,
    CardWebDesignComponent,
    ContSkillComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
