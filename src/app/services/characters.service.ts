import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Characters } from '../models/characters.model';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { DND_URL } from '../../environments/environment';

@Injectable()
export class CharactersService {

  constructor(private http: HttpClient) { }

  public findCharacter(character: Characters) : Observable<Characters> {
    return this.http.post(`${DND_URL}character/find`,character).catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
