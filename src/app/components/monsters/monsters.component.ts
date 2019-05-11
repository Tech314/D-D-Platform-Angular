import { Component, OnInit } from '@angular/core';
import { Monster } from '../../models/monster.model';
import { MonsterResponse } from '../../models/monster-response.model';
import { MonsterService } from '../../services/monster.service';
import { ClientMessage } from '../../models/client-message.model';
import { SpecialAbilities } from '../../models/special-abilities.model';
import { Action } from '../../models/action.model';
import { LegendaryAction } from '../../models/legendary-action.model';
import { Dice } from '../../models/dice.model';
import { DiceService } from '../../services/dice.service';

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.css']
})
export class MonstersComponent implements OnInit {

  groupBoardUrl: string = 'http://www.groupboard.com/gb/769351';

  constructor(private monsterService:MonsterService,private diceService:DiceService) { }

  ngOnInit() {
    this.getMonsters();
  }

  public clientMessage: ClientMessage = new ClientMessage('');

  //To present Dice received from API
  public dice: Dice;
  public dieRolled: String;
  public diceRolls: Dice[] = [];

  //To display monsters in dropdown select field
  public monsterList: MonsterResponse[] = [];

  //To display selected monster
  public monster: Monster = new Monster("",0,"","","","","",0,0,"","",0,0,0,0,0,0,0,0,0,0,0,0,"","","","","","","",[],[],[],"");
  public actions: Action[] = this.monster.actions;
  public legendaryActions: LegendaryAction[] = this.monster.legendary_actions;
  public specialAbilities: SpecialAbilities[] = this.monster.special_abilities;

  public diceClick(sides: string): void {
    this.dieRolled = sides;
    this.roll(new Dice(sides,0));
  }

  private roll(diceInput: Dice) : void {
    this.diceService.roll(diceInput)
              .subscribe(
                data => {
                  this.dice = data[0];
                  this.diceRolls.unshift(data[0]);
                  if(this.diceRolls.length > 10){
                    this.diceRolls.pop();
                  }
                },
                error => this.clientMessage.message = error
              );
  }

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
