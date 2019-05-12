import { Component } from '@angular/core';
import { ClientMessage } from '../../models/client-message.model';
import { CampaignService } from '../../services/campaign.service';
import { Campaign } from '../../models/campaign.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class CreateCampaignComponent {

    //Constructor Injection
    constructor(private campaignService: CampaignService) { }

    //For data binding
    public campaign: Campaign = new Campaign(0,"","",null,null,null,null,null,null);

    //To message the user
    public clientMessage: ClientMessage = new ClientMessage('');

    public createCampaign(): void {
      this.campaignService.registerCampaign(this.campaign)
      .subscribe(
        data => this.clientMessage = data,
        error => this.clientMessage.message = 'SOMETHING WENT WRONG.'
      );
    }
}
