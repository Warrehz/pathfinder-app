import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-armor-class',
  templateUrl: './armor-class.component.html',
  styleUrls: ['./armor-class.component.css']
})
export class ArmorClassComponent implements OnInit {
  unarmored: string;
  light: string;
  medium: string;
  heavy: string;
  fortitude: string;
  reflex: string;
  will: string;
  perception: string;

  constructor() { }

  ngOnInit() {
  }

}
