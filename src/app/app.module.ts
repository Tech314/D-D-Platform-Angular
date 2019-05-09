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
import {CharactersComponent} from './components/characters/characters.component';

//Http Client
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

//Services
import { HeroService } from './services/hero.service';
import { DiceService } from './services/dice.service';
import { CustomInterceptor } from './session/custom-interceptor';
import { CharactersService } from './services/Characters.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    RegisterComponent,
    AllComponent,
    FindComponent,
    PartyComponent,
    CharactersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HeroService,
    DiceService, CharactersService, {
    provide: HTTP_INTERCEPTORS,
    useClass: CustomInterceptor,
    multi: true
  }, CharactersComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
