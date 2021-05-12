import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  sectionHero = {
    title: 'Award-winning custom designs and digital branding solutions',
    subTitle: 'With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.',
    button: 'learn more'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
