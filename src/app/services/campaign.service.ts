import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { DND_URL } from '../../environments/environment';
import { Campaign } from '../models/campaign.model';
import { ClientMessage } from '../models/client-message.model';

@Injectable()
export class CampaignService {

  constructor(private http:HttpClient) { }
 
  public findAllCampaigns(): Observable<Campaign[]> {
    return this.http.get(`${DND_URL}campaign/all`).catch(this.handleError);
  }

  public findCampaign(campaign:Campaign): Observable<Campaign> {
    return this.http.post(`${DND_URL}campaign/find`,campaign).catch(this.handleError);
  }

  public registerCampaign(campaign:Campaign): Observable<ClientMessage> {
    return this.http.post(`${DND_URL}campaign/register`,campaign).catch(this.handleError);
  }

  private handleError(error: Response){
    return Observable.throw(error.statusText);
  }
}
