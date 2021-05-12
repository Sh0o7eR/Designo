import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  title = 'DESIGNO';
  menu = ['our company', 'location', 'contact'];

  constructor() { }

  ngOnInit(): void {
  }

}
