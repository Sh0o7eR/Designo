import { Component, OnInit } from '@angular/core';
import { Card } from '../../core/cardInterface';

@Component({
  selector: 'app-web-design',
  templateUrl: './web-design.component.html',
  styleUrls: ['./web-design.component.scss']
})
export class WebDesignComponent implements OnInit {

  itemsCard: Card[] = [
    {
      image: '../../../assets/web-design/desktop/image-express.jpg',
      title: 'EXPRESS',
      parag: 'A multi-carrier shipping website for ecommerce businesses'
    },
    {
      image: '../../../assets/web-design/desktop/image-transfer.jpg',
      title: 'TRANSFER',
      parag: 'Site for low-cost money transfers and sending money within seconds'
    },
    {
      image: '../../../assets/web-design/desktop/image-photon.jpg',
      title: 'PHOTON',
      parag: 'A state-of-the-art music player with high-resolution audio and DSP effects'
    },
    {
      image: '../../../assets/web-design/desktop/image-builder.jpg',
      title: 'BUILDER',
      parag: 'Connects users with local contractors based on their location'
    },
    {
      image: '../../../assets/web-design/desktop/image-blogr.jpg',
      title: 'BLOGR',
      parag: 'Blogr is a platform for creating an online blog or publication'
    },
    {
      image: '../../../assets/web-design/desktop/image-camp.jpg',
      title: 'CAMP',
      parag: 'Get expert training in coding, data, design, and digital marketing'
    }
  ];

  title = 'APP DESIGN';
  title2 = 'GRAPHIC DESIGN';
  text = 'VIEW PROJECTS';
  link = 'appdesign';
  link2 = 'graphicdesign';
  titleHero = 'Web Design';
  descHero = 'We build websites that serve as powerful marketing tools\n' +
    '    and bring memorable brand experiences.';

  constructor() { }

  ngOnInit(): void {
  }

}
