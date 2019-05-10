//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


// Routing
import { AppRoutingModule }  from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';
import { AllComponent } from './components/all/all.component';
import { FindComponent } from './components/find/find.component';
import { PartyComponent } from './components/party/party.component';
<<<<<<< HEAD
import { LoginComponent } from './components/login/login.component';
=======
import {CharactersComponent} from './components/characters/characters.component';
import { SafePipe } from './pipes/safe.pipe';
>>>>>>> 7102e631ee741b409bb6de8f8dfad2cd1643cdc9

//Http Client
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

//Services
import { HeroService } from './services/hero.service';
import { DiceService } from './services/dice.service';
import { CampaignService } from './services/campaign.service';
import { CustomInterceptor } from './session/custom-interceptor';
<<<<<<< HEAD
import { CampaignService } from './services/campaign.service';

=======
import { CharactersService } from './services/characters.service';
import { MonstersComponent } from './components/monsters/monsters.component';
import { MonsterService } from './services/monster.service';
>>>>>>> 7102e631ee741b409bb6de8f8dfad2cd1643cdc9

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    RegisterComponent,
    AllComponent,
    FindComponent,
    PartyComponent,
<<<<<<< HEAD
    LoginComponent
=======
    MonstersComponent,
    CharactersComponent,
    SafePipe
>>>>>>> 7102e631ee741b409bb6de8f8dfad2cd1643cdc9
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HeroService,
<<<<<<< HEAD
    CampaignService,
    DiceService, {
=======
    DiceService,
    CampaignService,
    CharactersService,
    MonsterService, {
>>>>>>> 7102e631ee741b409bb6de8f8dfad2cd1643cdc9
    provide: HTTP_INTERCEPTORS,
    useClass: CustomInterceptor,
    multi: true
  }, CharactersComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
