import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cont-skill',
  templateUrl: './cont-skill.component.html',
  styleUrls: ['./cont-skill.component.scss']
})
export class ContSkillComponent implements OnInit {

  @Input() title: string;
  @Input() title2: string;
  @Input() text: string;
  @Input() link: string;
  @Input() link2: string;

  constructor() { }

  ngOnInit(): void {
  }

}
