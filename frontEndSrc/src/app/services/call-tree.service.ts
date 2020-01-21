import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CallTreeInfo } from '../classes/CallTreeInfo';
@Injectable({
  providedIn: 'root'
})
export class CallTreeService {
  url = '../RestfulServices/CallTree/';
  constructor(private http: HttpClient) { }

  getAllCallTree(): Observable<CallTreeInfo[]> {
    const serviceURL = this.url + 'getAllCallTree';
    return this.http.get(serviceURL).pipe(map((res: CallTreeInfo[]) => res));
  }
  getSystemNameListByContactId(contactId: number): Observable<string[]> {
    const serviceURL = this.url + 'getSystemNameListByContactId';
    let requestParams = new HttpParams();
    requestParams = requestParams.append('contactId', contactId.toString());
    return this.http.post(serviceURL , requestParams).pipe(map((res: string[]) => res));
  }
  saveCallTree(callTree: CallTreeInfo): Observable<boolean> {
    const serviceURL = this.url + 'saveCallTree';
    let requestParams = new HttpParams();
    requestParams = requestParams.append('callTree', JSON.stringify(callTree));
    return this.http.post(serviceURL , callTree).pipe(map((res: boolean) => res));
  }
}
