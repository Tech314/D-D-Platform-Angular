import { Component, OnInit } from '@angular/core';
import { DiceService } from '../../services/dice.service';
import { Dice } from '../../models/dice.model';
import { ClientMessage } from '../../models/client-message.model';
import { CampaignService } from '../../services/campaign.service';
import { Campaign } from '../../models/campaign.model';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.css']
})
export class PartyComponent implements OnInit {
 
  title = 'Your Campaign';

  constructor(private diceService: DiceService,private campaignService: CampaignService) { }

  ngOnInit(){
    //find campaign for current session
    this.getCampaign();
  }

  public clientMessage: ClientMessage = new ClientMessage('');
  
//To present Dice received from API
  public dice: Dice;
  public dieRolled: String;

//To hold current campaign info
  public campaign: Campaign = new Campaign(1,"","",0,0,0,0,0,0);

  public diceClick(sides: string): void {
    this.dieRolled = sides;
    this.roll(new Dice(sides,0));
  }

  private getCampaign(): void {
    this.campaignService.findCampaign(this.campaign)
              .subscribe(
                data => this.campaign = data,
                error => this.clientMessage.message = error
              )
  }

  private roll(diceInput: Dice) : void {
    this.diceService.roll(diceInput)
              .subscribe(
                data => this.dice = data[0],
                error => this.clientMessage.message = error
              );
  }

}
