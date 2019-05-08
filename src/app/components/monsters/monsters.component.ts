import { Component, OnInit } from '@angular/core';
import { Monster } from '../../models/monster.model';
import { MonsterResponse } from '../../models/monster-response.model';
import { MonsterService } from '../../services/monster.service';
import { ClientMessage } from '../../models/client-message.model';
import { SpecialAbilities } from '../../models/special-abilities.model';
import { Action } from '../../models/action.model';
import { LegendaryAction } from '../../models/legendary-action.model';

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.css']
})
export class MonstersComponent implements OnInit {

  constructor(private monsterService:MonsterService) { }

  ngOnInit() {
    this.getMonsters();
  }

  public clientMessage: ClientMessage = new ClientMessage('');

  //To display monsters in dropdown select field
  public monsterList: MonsterResponse[] = [];

  //To display selected monster
  public monster: Monster = new Monster("",0,"","","","","",0,0,"","",0,0,0,0,0,0,0,0,0,0,0,0,"","","","","","","",[],[],[],"");
  public actions: Action[] = this.monster.actions;
  public legendaryActions: LegendaryAction[] = this.monster.legendary_actions;
  public specialAbilities: SpecialAbilities[] = this.monster.special_abilities;


  public getMonster(): void {
    this.monsterService.getMonster(this.monster).subscribe(
      data => {
        this.monster = data;
        this.actions = this.monster.actions;
        this.legendaryActions = this.monster.legendary_actions;
        this.specialAbilities = this.monster.special_abilities;
      },
      error => this.clientMessage.message = error
    )
  }


  public getMonsters(): void {
    this.monsterService.getMonsters().subscribe(
      data => this.monsterList = data,
      error => this.clientMessage.message = error
    )
  }

}
