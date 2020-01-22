import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trained-radio',
  templateUrl: './trained-radio.component.html',
  styleUrls: ['./trained-radio.component.css']
})
export class TrainedRadioComponent implements OnInit {
  
  training: string;
  levels: string[] = ['Trained', 'Expert', 'Master', 'Legendary'];

  constructor() { }

  ngOnInit() {
  }

}
