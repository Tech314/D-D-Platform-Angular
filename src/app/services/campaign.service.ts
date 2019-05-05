import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DND_URL } from '../../environments/environment';
import { Campaign } from '../models/campaign.model';

@Injectable()
export class CampaignService {

  constructor(private http:HttpClient) { }

  public CampaignLogin(campaign: Campaign): Observable<Campaign> {
    return this.http
            .post(`${DND_URL}loginToCampaign`, campaign)
            .catch(this.handleError);
  }

  private handleError(error: Response){
    return Observable.throw(error.statusText);
  }

}
