import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Manual } from '../classes/Manual';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ManualService {
  url = '../RestfulServices/ManualService/';
  constructor(private http: HttpClient) { }

  getManualsByCallTreeEntryId(callTreeEntryId: number): Observable<Manual[]> {
    const serviceURL = this.url + 'getManualsByCallTreeEntryId';
    let requestParams = new HttpParams();
    requestParams = requestParams.append('callTreeEntryId', callTreeEntryId.toString());
    return this.http.post(serviceURL, requestParams).pipe(map((res: Manual[]) => res));
  }

  updateManuals(callTreeEntryId: number, manuals: Manual[]): Observable<boolean> {
    const serviceURL = this.url + 'updateManuals';
    let requestParams = new HttpParams();
    requestParams = requestParams.append('callTreeEntryId', callTreeEntryId.toString());
    requestParams = requestParams.append('manuals', JSON.stringify(manuals));
    return this.http.post(serviceURL, requestParams).pipe(map((res: boolean) => res));
  }
}
