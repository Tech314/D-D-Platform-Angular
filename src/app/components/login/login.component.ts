import { Component } from '@angular/core';
import { CampaignService } from '../../services/campaign.service';
import { Campaign } from '../../models/campaign.model';
import { Router } from '@angular/router';
import { ClientMessage } from '../../models/client-message.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router:Router,private campaignService:CampaignService) { }

  public campaign:Campaign = new Campaign(0,"","",0,0,0,0,0,0);

  public campaignData:Campaign = new Campaign(0,"","",0,0,0,0,0,0);

  public clientMessage: ClientMessage = new ClientMessage('');

  campaignCreate():void{
    this.campaignService.CampaignLogin(this.campaign)
    .subscribe(
      data => this.campaignData = data,
      error => this.clientMessage.message = 'invalid login credentials'
      );   
  }

  onSubmit():void{
    this.campaignCreate();
    this.router.navigate(['/party']);
  }


}
