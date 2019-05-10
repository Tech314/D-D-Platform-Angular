// Modules
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { MainComponent } from './components/main/main.component';
import { PartyComponent } from './components/party/party.component';
import { MonstersComponent } from './components/monsters/monsters.component';
import { CharactersComponent } from './components/characters/characters.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'party',  component: PartyComponent },
  { path: 'monster', component: MonstersComponent },
  { path: 'character', component: CharactersComponent },
  //{ path: 'createCampaign',  component: CreateCampaignComponent },
  { path: 'loginCampaign',  component: LoginComponent }
   
  //{ path: 'createCharacter',  component: CreateCharacterComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}