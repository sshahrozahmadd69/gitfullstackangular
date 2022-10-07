import { HttpClient, HttpHeaders } from '@angular/common/http';

import { UserConfig } from '../user.config';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  public getAllCars(): Observable<any> {
    const url = UserConfig.getPath() + '/cars';

    return this.http.get(url);
  }

//  public getSingleCar(id): Observable<any> {
//    const url = UserConfig.getPath() + `/api/addusers`;

//    return this.http.get(url);
//   }

  public signUp(data: object): Observable<any> {
    const url = UserConfig.getPath() + '/api/addusers'

    return this.http.post(url, data);
  }
}