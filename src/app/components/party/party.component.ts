import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.css']
})
export class PartyComponent implements OnInit {

  title = 'Your Campaign';

  constructor() { }

  ngOnInit() {
  }

  public diceRoll: number = 0;

  public roll(dice:number) : void {
    
  }

}
