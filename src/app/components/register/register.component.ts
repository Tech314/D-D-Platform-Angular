import { Component } from '@angular/core';

import { HeroService } from '../../services/hero.service';
import { Hero } from '../../models/hero.model';
import { ClientMessage } from '../../models/client-message.model';
import { CampaignService } from '../../services/campaign.service';
import { Campaign } from '../../models/campaign.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class CreateCampaignComponent {
    title = 'Create Campaign';

    //Constructor Injection
    constructor(private campaignService: CampaignService) { }

    //For data binding
    public campaign: Campaign = new Campaign(0,"","",0,0,0,0,0,0);

    //To message the user
    public clientMessage: ClientMessage = new ClientMessage('');

    public registerCampaign(): void {
      this.campaignService.registerCampaign(this.campaign)
      .subscribe(
        data => this.clientMessage = data,
        error => this.clientMessage.message = 'SOMETHING WENT WRONG.'
      );
    }
}
