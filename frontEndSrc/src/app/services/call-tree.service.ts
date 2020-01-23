import { CallTreeInfo } from '../classes/CallTreeInfo';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CallTreeService {
  url = '../RestfulServices/CallTree/';
  constructor(private http: HttpClient) { }
  getCallTreeInfoByCallTreeId(callTreeId: number): Observable<CallTreeInfo[]>{
    const serviceURL = this.url + 'getCallTreeInfoByCallTreeId';
    let requestParams = new HttpParams();
    requestParams = requestParams.append('callTreeId', callTreeId.toString());
    return this.http.post(serviceURL, requestParams).pipe(map((res: CallTreeInfo[]) => res));
  }
}
