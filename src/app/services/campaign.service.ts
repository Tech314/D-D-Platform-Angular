import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DND_URL } from '../../environments/environment';
import { Campaign } from '../models/campaign.model';

@Injectable()
export class CampaignService {

  constructor(private http:HttpClient) { }

  public CampaignLogin(username:string,password:string): Observable<Campaign>{
    return null;

  }

}
