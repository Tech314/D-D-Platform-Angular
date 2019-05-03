import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Dice } from '../models/dice.model';
import { DND_URL } from '../../environments/environment';
import { Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DiceService {

  constructor(private http:HttpClient) { }

  public roll(dice: Dice): Observable<Dice[]> {
    return this.http
              .post(`${DND_URL}dice/roll`, dice)
              .catch(this.handleError);
  }

  private handleError(error: Response){
    return Observable.throw(error.statusText);
  }
}