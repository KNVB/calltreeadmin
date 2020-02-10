import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Manual } from '../classes/Manual';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CallTreeEntry } from '../classes/CallTreeEntry';
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

  updateManuals(callTreeEntry: CallTreeEntry): Observable<boolean> {
    const serviceURL = this.url + 'updateManuals';
    /*
    To the following code working, a lot of work in server side need to do.
    Please refer the following web page for detail:
    https://stackoverflow.com/questions/39635108/java-jersey-creating-own-injection-resolver-with-paraminjectionresolver-stra/39636141#39636141
    */
   /*
    let requestParams = {};
    requestParams['callTreeEntryId']=callTreeEntryId;
    requestParams ['manuals']=manuals;
    */
    return this.http.post(serviceURL,callTreeEntry).pipe(map((res: boolean) => res));
  }
}
