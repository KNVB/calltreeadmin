import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DivisionService {
  url = '../RestfulServices/Division/';
  constructor(private http: HttpClient) { }
  getActiveDivisionList(): Observable<string[]> {
    const serviceURL = this.url + 'getActiveDivisionList';
    return this.http.get(serviceURL).pipe(map((res: string[]) => res));
  }
}
