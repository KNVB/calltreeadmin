import { CallTreeEntry } from '../classes/CallTreeEntry';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CallTreeEntryService {
  url = '../RestfulServices/CallTreeEntry/';
  constructor(private http: HttpClient) { }

  addCallTreeEntry(callTreeEntry: CallTreeEntry): Observable<CallTreeEntry> {
    const serviceURL = this.url + 'addCallTreeEntry';
    return this.http.post(serviceURL , callTreeEntry).pipe(map((res:CallTreeEntry) => res));
  }
  getAllCallTreeEntry(): Observable<CallTreeEntry[]> {
    const serviceURL = this.url + 'getAllCallTreeEntry';
    return this.http.get(serviceURL).pipe(map((res: CallTreeEntry[]) => res));
  }
  updateCallTreeEntry(callTreeEntry: CallTreeEntry): Observable<boolean> {
    const serviceURL = this.url + 'updateCallTreeEntry';
    return this.http.post(serviceURL , callTreeEntry).pipe(map((res: boolean) => res));
  }
  enableCallTreeEntry(callTreeEntryId: number): Observable<boolean> {
    const serviceURL = this.url + 'enableCallTreeEntry';
    let requestParams = new HttpParams();
    requestParams = requestParams.append('callTreeEntryId', callTreeEntryId.toString());
    return this.http.post(serviceURL, requestParams).pipe(map((res: boolean) => res));
  }
  disableCallTreeEntry(callTreeEntryId: number): Observable<boolean> {
    const serviceURL = this.url + 'disableCallTreeEntry';
    let requestParams = new HttpParams();
    requestParams = requestParams.append('callTreeEntryId', callTreeEntryId.toString());
    return this.http.post(serviceURL, requestParams).pipe(map((res: boolean) => res));
  }
}
