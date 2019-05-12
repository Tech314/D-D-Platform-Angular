import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
    title = 'D&D Portal';
    image = 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fpop-verse.com%2Fwp-content%2Fuploads%2F2015%2F08%2FDungeons_and_Dragons_4th_Edition_Logo.jpg&f=1';
    beginnerCampaigns = 'http://www.dndadventure.com/html/adventures/adv1.html';
}
