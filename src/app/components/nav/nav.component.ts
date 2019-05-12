import { Component } from '@angular/core';
import { CampaignService } from '../../services/campaign.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  constructor(private campaignService: CampaignService, private router: Router){}

  public logout(): void {
    this.campaignService.logout()
                  .subscribe(
                    data => window.alert(data.message),
                    error => window.alert(error.message),
                    () => this.router.navigate(['/main'])
                  )
  }
}
