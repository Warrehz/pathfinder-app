import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ability-score-item',
  templateUrl: './ability-score-item.component.html',
  styleUrls: ['./ability-score-item.component.css']
})
export class AbilityScoreItemComponent implements OnInit {

  scores = [
    {name: 'STR',
     score: 9},
    {name: 'DEX',
     score: 14},
    {name: 'CON',
     score: 16},
    {name: 'INT',
     score: 18},
    {name: 'WIS',
     score: 10},
    {name: 'CHA',
     score: 12}
  ]

  findMod = (ability) => {
    return Math.floor((ability.score - 10) / 2);
  }

  constructor() { }

  ngOnInit() {
  }

}
