import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  name = 'DESIGNO';
  menu = ['our company', 'location', 'contact'];

  constructor() { }

  ngOnInit(): void {
  }

}
