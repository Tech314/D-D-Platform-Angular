// Modules
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { MainComponent } from './components/main/main.component';
import { PartyComponent } from './components/party/party.component';
<<<<<<< HEAD
import { LoginComponent } from './components/login/login.component';
=======
import { MonstersComponent } from './components/monsters/monsters.component';
import { CharactersComponent } from './components/characters/characters.component';
>>>>>>> 7102e631ee741b409bb6de8f8dfad2cd1643cdc9

export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'party',  component: PartyComponent },
<<<<<<< HEAD
 // { path: 'createCampaign',  component: CreateCampaignComponent },
  { path: 'loginCampaign',  component: LoginComponent },
  
 // { path: 'createCharacter',  component: CreateCharacterComponent }
=======
  { path: 'monster', component: MonstersComponent },
  { path: 'character', component: CharactersComponent }
 /* { path: 'createCampaign',  component: CreateCampaignComponent },
  { path: 'loginCampaign',  component: LoginCampaignComponent },
   
  { path: 'createCharacter',  component: CreateCharacterComponent }*/
>>>>>>> 7102e631ee741b409bb6de8f8dfad2cd1643cdc9
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}