import { CallTreeEntry } from '../classes/CallTreeEntry';
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
  getCallTreeEntryByCallTreeId(callTreeId: number): Observable<CallTreeEntry[]> {
    const serviceURL = this.url + 'getCallTreeEntryByCallTreeId';
    let requestParams = new HttpParams();
    requestParams = requestParams.append('callTreeId', callTreeId.toString());
    return this.http.post(serviceURL, requestParams).pipe(map((res: CallTreeEntry[]) => res));
  }
}
