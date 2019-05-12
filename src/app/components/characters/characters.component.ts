import { Component } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { Characters } from '../../models/characters.model';
import { ClientMessage } from '../../models/client-message.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {

  title = 'Character Sheet';


  constructor(private characterService: CharactersService){ }

  public clientMessage: ClientMessage = new ClientMessage('');
  
  public character: Characters = new Characters(0,"",0,0,"","","","","","","","","","","","","","");
  public race: String;
  public gender: String;
  public name: String;
  public classs: String ="";
  public equipment: String;
  public skills: String;
  public stats: String;
  public str: String;
  public dex: String;
  public con: String;
  public int: String;
  public wis: String;
  public cha: String;

  private getRace(): void{
    this.characterService.getRace()
                    .subscribe(
                      data => this.character = data,
                      error => this.clientMessage.message = error
                    );
  }

  private getName(): void{
    this.characterService.getName()
                    .subscribe(
                      data => this.character = data,
                      error => this.clientMessage.message = error
                    );
  }

  private getClass(): void{
    this.characterService.getClass()
                    .subscribe(
                      data => this.character = data,
                      error => this.clientMessage.message = error
                    );
  }

  private getStats(): void{
    this.characterService.getStats()
                    .subscribe(
                      data => {
                        this.character = data;
                        let stats: string[] = this.character.stats.split(",",6);
                        this.character.str = stats[0];
                        this.character.dex = stats[1];
                        this.character.con = stats[2];
                        this.character.int = stats[3];
                        this.character.wis = stats[4];
                        this.character.cha = stats[5];
                      }
                      ,

                      error => this.clientMessage.message = error
                    );
  }

  private getEquipment(): void{
    if (this.character.charClass != ""){
    this.characterService.getEquipment(this.character.charClass)
                    .subscribe(
                      data => this.character = data,
                      error => this.clientMessage.message = error
                    );
    }
  }

}
