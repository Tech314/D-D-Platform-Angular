// Modules
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { MainComponent } from './components/main/main.component';
import { PartyComponent } from './components/party/party.component';

export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'party',  component: PartyComponent },
 /* { path: 'createCampaign',  component: CreateCampaignComponent },
  { path: 'loginCampaign',  component: LoginCampaignComponent },
  
  { path: 'createCharacter',  component: CreateCharacterComponent }*/
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}