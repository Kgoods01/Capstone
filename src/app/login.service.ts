import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loggedIn = false;
  public userInfo: any;

  private _loggedIn$ = new BehaviorSubject<any>(this.loggedIn);
  public loggedIn$ = this._loggedIn$.asObservable();

  private _userInfo$ = new BehaviorSubject<any>('');
  public userInfo$ = this._userInfo$.asObservable();

  constructor(
    public cookieService: CookieService,
    public router: Router
  ) { }

  checkLogin() {
    const cookie = this.cookieService.get('loggedIn');
    if (cookie) {
      this._userInfo$.next(JSON.parse(cookie));
      this.loggedIn = true;
      this._loggedIn$.next(true);
    } else {
      this.loggedIn = false;
      this._loggedIn$.next(false);
    }
  }

  setLoginCookie(loginInfo: any) {
    // loginInfo = { role: 'ROOT', email: ''};
    this.cookieService.set('loggedIn', JSON.stringify(loginInfo));
    this.checkLogin();
  }

  logout() {
    this.cookieService.delete('loggedIn');
    // this.checkLogin();
    location.reload();
  }

}
