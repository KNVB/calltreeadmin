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
  saveCallTreeInfo(callTreeInfo: CallTreeInfo): Observable<boolean> {
    const serviceURL = this.url + 'saveCallTreeInfo';
    let requestParams = new HttpParams();
    requestParams = requestParams.append('callTreeInfo', JSON.stringify(callTreeInfo));
    return this.http.post(serviceURL , callTreeInfo).pipe(map((res: boolean) => res));
  }
}
