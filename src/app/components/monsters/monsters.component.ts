import { Component, OnInit } from '@angular/core';
import { Monster } from '../../models/monster.model';

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.css']
})
export class MonstersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.getMonsters();
  }

  //To display monsters in dropdown select field
  public monsterList: Monster[] = [];

  public getMonsters(): void {
    
  }

}
