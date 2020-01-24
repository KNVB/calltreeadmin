import { CallTreeEntry } from '../classes/CallTreeEntry';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CallTreeEntryService {
  url = '../RestfulServices/CallTreeInfo/';
  constructor(private http: HttpClient) { }

  addCallTreeInfo(callTreeInfo: CallTreeEntry): Observable<number> {
    const serviceURL = this.url + 'addCallTreeInfo';
    return this.http.post(serviceURL , callTreeInfo).pipe(map((res: number) => res));
  }
  getAllCallTreeInfo(): Observable<CallTreeEntry[]> {
    const serviceURL = this.url + 'getAllCallTreeInfo';
    return this.http.get(serviceURL).pipe(map((res: CallTreeEntry[]) => res));
  }
  updateCallTreeInfo(callTreeEntry: CallTreeEntry): Observable<boolean> {
    const serviceURL = this.url + 'updateCallTreeEntry';
    return this.http.post(serviceURL , callTreeEntry).pipe(map((res: boolean) => res));
  }
  enableCallTreeInfo(callTreeEntryId: number): Observable<boolean> {
    const serviceURL = this.url + 'enableCallTreeEntry';
    let requestParams = new HttpParams();
    requestParams = requestParams.append('callTreeInfoId', callTreeEntryId.toString());
    return this.http.post(serviceURL, requestParams).pipe(map((res: boolean) => res));
  }
  disableCallTreeInfo(callTreeEntryId: number): Observable<boolean> {
    const serviceURL = this.url + 'disableCallTreeEntry';
    let requestParams = new HttpParams();
    requestParams = requestParams.append('callTreeInfoId', callTreeEntryId.toString());
    return this.http.post(serviceURL, requestParams).pipe(map((res: boolean) => res));
  }
}
