import { Component, OnInit } from '@angular/core';

interface Menu {
  nome: string;
  link: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  title = 'DESIGNO';
  menuNavbar: Menu[] = [
    {
      nome: 'our company',
      link: 'about'
    },
    {
      nome: 'location',
      link: 'locations'
    },
    {
      nome: 'contact',
      link: 'contact'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
