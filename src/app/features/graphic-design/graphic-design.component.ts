import { Component, OnInit } from '@angular/core';
import {Card} from '../../core/cardInterface';

@Component({
  selector: 'app-graphic-design',
  templateUrl: './graphic-design.component.html',
  styleUrls: ['./graphic-design.component.scss']
})
export class GraphicDesignComponent implements OnInit {

  itemsCard: Card[] =  [
    {
      image: '../../../assets/graphic-design/desktop/image-change.jpg',
      title: 'TIM BROWN',
      parag: 'A book cover designed for Tim Brown’s new release, ‘Change’'
    },
    {
      image: '../../../assets/graphic-design/desktop/image-boxed-water.jpg',
      title: 'BOXED WATER',
      parag: 'A simple packaging concept made for Boxed Water'
    },
    {
      image: '../../../assets/graphic-design/desktop/image-science.jpg',
      title: 'SCIENCE!',
      parag: 'A poster made in collaboration with the Federal Art Project'
    }
  ];

  titleHero = 'Graphic Design';
  descHero = 'We deliver eye-catching branding materials that are tailored to meet your business objectives.';
  title = 'APP DESIGN';
  title2 = 'WEB DESIGN';
  text = 'VIEW PROJECTS';
  link = 'appdesign';
  link2 = 'webdesign';

  constructor() { }

  ngOnInit(): void {
  }

}
