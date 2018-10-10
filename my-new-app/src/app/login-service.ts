import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class LoginService {
  constructor(private http: Http) {
  }

  storeLoginDetails(formDetails: any) {
    return this.http.post('https://ocas-project.firebaseio.com/data.json', formDetails);
  }
}
