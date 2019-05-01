// Modules
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { MainComponent } from './components/main/main.component';

export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' }
 /* { path: 'createCampaign',  component: CreateCampaignComponent },
  { path: 'loginCampaign',  component: LoginCampaignComponent },
  { path: 'party',  component: PartyComponent },
  { path: 'createCharacter',  component: CreateCharacterComponent }*/
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}