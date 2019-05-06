import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Monster } from '../models/monster.model';
import { DND_URL } from '../../environments/environment';

@Injectable()
export class MonsterService {

  constructor(private http:HttpClient) { }

  public getMonsters(): Observable<Monster[]>{
    return this.http.get(`${DND_URL}monster/all`).catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
