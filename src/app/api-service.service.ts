import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

const url = 'https://nn608r3gr4.execute-api.us-east-2.amazonaws.com/default/'

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(
    public http: HttpClient
  ) { }

  login(email: string, password: string) {
    //this.getCourses();
    return <Observable<any>>this.http
    .get(`${url}/LogIn?userEmail=${email}&password=${password}`);
    

  }

  getCourses() {
  let result = <Observable<any>>this.http.get(`${url}sspCourses`);
  console.log('my result');
  return result;

  }

  register(registration: any) {
    return <Observable<any>>this.http.post(`${url}/sspRegistration`, registration);
    // return <Observable<any>>this.http.post('./api/sspRegistration', registration);
  }

  approveReject(request: any, action: string) {
    // return <Observable<any>>this.http.put(`./api/sspRegistration?requestersEmail=${request.requestersEmail}&action=${action}`, request);  }
    return <Observable<any>>this.http.put(`${url}/sspRegistration?requestersEmail=${request.requestersEmail}&action=${action}`, request);  }


  getApprovalRequests() {
    return <Observable<any>>this.http.get(`${url}/sspRegistration`);
    // return <Observable<any>>this.http.get('./api/sspRegistration');


    
  }
  
}
