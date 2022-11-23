import { AuthenticationService } from '../services/authentication.service';
import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutoLoginGuard implements CanLoad {
  constructor(private authService: AuthenticationService, private router: Router)
  {}
  
  canLoad(): Observable<boolean>{
    console.log('cek sesi login');
    return this.authService.isAuthenticated.pipe(
      filter((val) => val !== null),
      take(1),
      map((isAuthenticated) => {
        if(isAuthenticated){
          console.log('ada sesi login, redirect ke dashboard');
          this.router.navigateByUrl('/dashboard', {replaceUrl: true});
          return false;
        }else{
          console.log('tidak ada sesi login');
          return true;
        }
      })
    );
  }
}
