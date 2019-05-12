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

  public username:String;
  public password:String;

  public onSubmit(): void {
    this.campaignService.loginCampaign(this.username,this.password)
    .subscribe(
      data => this.campaignData = data,
      error => this.clientMessage.message = 'Invalid username or password',
      () => this.router.navigate(['/party'])
    );
  }

}
