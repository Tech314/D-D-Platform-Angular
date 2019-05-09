import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Characters } from '../models/characters.model';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { DND_URL } from '../../environments/environment';
import { Response } from '@angular/http';
import 'rxjs/Observable';

@Injectable()
export class CharactersService {

  constructor(private http: HttpClient) { }

  public findCharacter(character: Characters) : Observable<Characters> {
    return this.http.post(`${DND_URL}character/find`,character).catch(this.handleError);
  }

public getRace(): Observable<Characters>{
  return this.http.get(`${DND_URL}characters/race`).catch(this.handleError);
}

public getName(): Observable<Characters>{
  return this.http.get(`${DND_URL}characters/name`).catch(this.handleError);
}

public getClass(): Observable<Characters>{
  return this.http.get(`${DND_URL}characters/class`).catch(this.handleError);
}

public getStats(): Observable<Characters>{
  return this.http.get(`${DND_URL}characters/stats`).catch(this.handleError);
}

public  getEquipment(classs : String): Observable<Characters>{
  return this.http.post(`${DND_URL}characters/equipment`, classs).catch(this.handleError);
}

private handleError(error: Response){
  return Observable.throw(error.statusText);
}
}
