import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {
  }

  storeLoginDetails(formDetails: any) {
    return this.http.post('https://ocas-project.firebaseio.com/data.json', formDetails);
  }
}
