import { CallTreeInfo } from '../classes/CallTreeInfo';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CallTreeInfoService {
  url = '../RestfulServices/CallTreeInfo/';
  constructor(private http: HttpClient) { }

  getAllCallTreeInfo(): Observable<CallTreeInfo[]> {
    const serviceURL = this.url + 'getAllCallTreeInfo';
    return this.http.get(serviceURL).pipe(map((res: CallTreeInfo[]) => res));
  }
  getSharedCallTree(): Observable<CallTreeInfo[]> {
    const serviceURL = this.url + 'getSharedCallTree';
    return this.http.get(serviceURL).pipe(map((res: []) => res));
  }
  addCallTreeInfo(callTreeInfo: CallTreeInfo): Observable<boolean> {
    const serviceURL = this.url + 'addCallTreeInfo';
    return this.http.post(serviceURL , callTreeInfo).pipe(map((res: boolean) => res));
  }
  updateCallTreeInfo(callTreeInfo: CallTreeInfo): Observable<boolean> {
    const serviceURL = this.url + 'updateCallTreeInfo';
    return this.http.post(serviceURL , callTreeInfo).pipe(map((res: boolean) => res));
  }
  enableCallTreeInfo(callTreeInfoId: number): Observable<boolean> {
    const serviceURL = this.url + 'enableCallTreeInfo';
    let requestParams = new HttpParams();
    requestParams = requestParams.append('callTreeInfoId', callTreeInfoId.toString());
    return this.http.post(serviceURL, requestParams).pipe(map((res: boolean) => res));
  }
  disableCallTreeInfo(callTreeInfoId: number): Observable<boolean> {
    const serviceURL = this.url + 'disableCallTreeInfo';
    let requestParams = new HttpParams();
    requestParams = requestParams.append('callTreeInfoId', callTreeInfoId.toString());
    return this.http.post(serviceURL, requestParams).pipe(map((res: boolean) => res));
  }
}
