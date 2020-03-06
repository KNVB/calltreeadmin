import { CallTree } from '../classes/CallTree';
import { CallTreeEntry } from '../classes/CallTreeEntry';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { OperationResult } from '../classes/OperationResult';

@Injectable({
  providedIn: 'root'
})
export class CallTreeService {
  url = '../RestfulServices/CallTree/';
  constructor(private http: HttpClient) { }
  getCallTreeEntryByCallTreeId(callTreeId: number): Observable<OperationResult> {
    const serviceURL = this.url + 'getCallTreeEntryByCallTreeId';
    let requestParams = new HttpParams();
    requestParams = requestParams.append('callTreeId', callTreeId.toString());
    return this.http.post(serviceURL, requestParams).pipe(map((res: OperationResult) => res));
  }
  updateCallTree(callTree: CallTree): Observable<boolean> {
    const serviceURL = this.url + 'updateCallTree';
    return this.http.post(serviceURL , callTree).pipe(map((res: boolean) => res));
  }
}
