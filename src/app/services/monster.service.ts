import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Observable';
import { Monster } from '../models/monster.model';
import { DND_URL } from '../../environments/environment';
import { MonsterResponse } from '../models/monster-response.model';

@Injectable()
export class MonsterService {

  constructor(private http:HttpClient) { }

  public getMonsters(): Observable<MonsterResponse[]>{
    return this.http.get(`${DND_URL}monster/all`).catch(this.handleError);
  }

  public getMonster(monster:Monster): Observable<Monster>{
    return this.http.post(`${DND_URL}monster/find`,monster).catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
