import { Component, OnInit } from '@angular/core';
import {Card} from '../../core/cardInterface';

@Component({
  selector: 'app-app-design',
  templateUrl: './app-design.component.html',
  styleUrls: ['./app-design.component.scss']
})
export class AppDesignComponent implements OnInit {

  itemsCard: Card[] = [
    {
      image: '../../../assets/app-design/desktop/image-airfilter.jpg',
      title: 'AIRFILTER',
      parag: 'Solving the problem of poor indoor air quality by filtering the air'
    },
    {
      image: '../../../assets/app-design/desktop/image-eyecam.jpg',
      title: 'EYECAM',
      parag: 'Product that lets you edit your favorite photos and videos at any time'
    },
    {
      image: '../../../assets/app-design/desktop/image-faceit.jpg',
      title: 'FACEIT',
      parag: 'Get to meet your favorite internet superstar with the faceit app'
    },
    {
      image: '../../../assets/app-design/desktop/image-todo.jpg',
      title: 'TODO',
      parag: 'A todo app that features cloud sync with light and dark mode'
    },
    {
      image: '../../../assets/app-design/desktop/image-loopstudios.jpg ',
      title: 'LOOPSTUDIOS',
      parag: 'A VR experience app made for Loopstudios'
    }
  ];

  titleHero = 'App Design';
  descHero = 'Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.';
  title = 'WEB DESIGN';
  title2 = 'GRAPHIC DESIGN';
  text = 'VIEW PROJECTS';
  link = 'webdesign';
  link2 = 'graphicdesign';


  constructor() { }

  ngOnInit(): void {
  }

}
