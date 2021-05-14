import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-web-design',
  templateUrl: './card-web-design.component.html',
  styleUrls: ['./card-web-design.component.scss']
})
export class CardWebDesignComponent implements OnInit {

  @Input() image: string;
  @Input() title: string;
  @Input() parag: string;

  constructor() { }

  ngOnInit(): void {
  }

}
