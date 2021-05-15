import { Component } from '@angular/core';

interface Menu {
  nome: string;
  link: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

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

  toggleButton(): void{
    const menuMobile = document.getElementById('menuMobile');
    const burger = document.getElementById('menuMobile__burger');
    const list = document.getElementById('menuMobile__list');

    if (list.style.display === 'none'){
      menuMobile.classList.add('pannel');
      burger.style.paddingBottom = '50px';
      list.style.display = 'block';
      list.classList.add('listStyle');
    } else {
      list.style.display = 'none';
      menuMobile.classList.remove('pannel');
      burger.style.paddingBottom = '0px';
    }
  }
}
