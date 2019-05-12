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
import { PartyComponent } from './components/party/party.component';
import {CharactersComponent} from './components/characters/characters.component';
import { SafePipe } from './pipes/safe.pipe';
import { LoginComponent } from './components/login/login.component';
import { CreateCampaignComponent } from './components/register/register.component';

//Http Client
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

//Services
import { DiceService } from './services/dice.service';
import { CampaignService } from './services/campaign.service';
import { CustomInterceptor } from './session/custom-interceptor';
import { CharactersService } from './services/characters.service';
import { MonstersComponent } from './components/monsters/monsters.component';
import { MonsterService } from './services/monster.service';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    PartyComponent,
    MonstersComponent,
    CharactersComponent,
    LoginComponent,
    CreateCampaignComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DiceService,
    CampaignService,
    CharactersService,
    MonsterService, {
    provide: HTTP_INTERCEPTORS,
    useClass: CustomInterceptor,
    multi: true
  }, CharactersComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
