import { Component, OnInit } from '@angular/core';
import { DiceService } from '../../services/dice.service';
import { Dice } from '../../models/dice.model';
import { ClientMessage } from '../../models/client-message.model';
import { CampaignService } from '../../services/campaign.service';
import { Campaign } from '../../models/campaign.model';
import { Characters } from '../../models/characters.model';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.css']
})
export class PartyComponent implements OnInit {
 
  title = 'Your Campaign';
  groupBoardUrl: string = 'http://www.groupboard.com/gb/769351';

  constructor(private diceService: DiceService,private campaignService: CampaignService
    ,private charactersService:CharactersService) { }

  ngOnInit(){
    //find campaign for current session
    this.getCampaign();
    //find characters for current session
    //window.setTimeout(() => this.getCharacters, 500);
  }

  public clientMessage: ClientMessage = new ClientMessage('');
  
//To present Dice received from API
  public dice: Dice;
  public dieRolled: String;

//Array of previous Dice rolls
  public diceRolls: Dice[] = [];

//To hold current campaign info
  public campaign: Campaign = new Campaign(1,"","",0,0,0,0,0,0);


//To hold current character info
  public char: Characters = new Characters(0,"",0,0,"","","","","","","","","","","","");
  public char1: Characters;
  public char2: Characters;
  public char3: Characters;
  public char4: Characters;
  public char5: Characters;
  public char6: Characters;

  public diceClick(sides: string): void {
    this.dieRolled = sides;
    this.roll(new Dice(sides,0));
  }

  private getCampaign(): void {
    this.campaignService.findCampaign(this.campaign)
              .subscribe(
                data => this.campaign = data,
                error => this.clientMessage.message = error
              );
  }

  private getCharacters(): void {
    this.char.charId = this.campaign.char1;
    this.charactersService.findCharacter(this.char)
              .subscribe(
                data => this.char1 = data,
                error => this.clientMessage.message = error
              );

    this.char.charId = this.campaign.char2;
    this.charactersService.findCharacter(this.char)
              .subscribe(
                data => this.char2 = data,
                error => this.clientMessage.message = error
              );

    this.char.charId = this.campaign.char3;
    this.charactersService.findCharacter(this.char)
              .subscribe(
                data => this.char3 = data,
                error => this.clientMessage.message = error
              );

    this.char.charId = this.campaign.char4;
    this.charactersService.findCharacter(this.char)
              .subscribe(
                data => this.char4 = data,
                error => this.clientMessage.message = error
              );

    this.char.charId = this.campaign.char5;
    this.charactersService.findCharacter(this.char)
              .subscribe(
                data => this.char5 = data,
                error => this.clientMessage.message = error
              );

    this.char.charId = this.campaign.char6;
    this.charactersService.findCharacter(this.char)
              .subscribe(
                data => this.char6 = data,
                error => this.clientMessage.message = error
              );
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

}
