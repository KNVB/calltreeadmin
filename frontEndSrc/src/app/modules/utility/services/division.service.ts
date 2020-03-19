import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OperationResult } from '../classes/OperationResult';

@Injectable({
  providedIn: 'root'
})
export class DivisionService {
  url = '../RestfulServices/DivisionService/';

  constructor(private http: HttpClient) { }
  getActiveDivisionList(): Observable<OperationResult> {
    const serviceURL = this.url + 'getActiveDivisionList';
    return this.http.get(serviceURL).pipe(map((res: OperationResult) => res));
  }
}
