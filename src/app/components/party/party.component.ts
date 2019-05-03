import { Component, OnInit } from '@angular/core';
import { DiceService } from '../../services/dice.service';
import { Dice } from '../../models/dice.model';
import { ClientMessage } from '../../models/client-message.model';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.css']
})
export class PartyComponent {

  title = 'Your Campaign';

  constructor(private diceService: DiceService) { }

  public clientMessage: ClientMessage = new ClientMessage('');
  
//To present Dice received from API
  public dice: Dice;
  public dieRolled: String;

  public diceClick(sides: string): void {
    this.dieRolled = sides;
    this.roll(new Dice(sides,0));
  }

  private roll(diceInput: Dice) : void {
    this.diceService.roll(diceInput)
              .subscribe(
                data => this.dice = data[0],
                error => this.clientMessage.message = error
              );
  }

}
