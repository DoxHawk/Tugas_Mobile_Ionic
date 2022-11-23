import { AuthenticationService } from '../services/authentication.service';
import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { Observable } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';

const TYPE = 'tipe';

@Injectable({
  providedIn: 'root'
})
export class AutoLoginGuard implements CanLoad {
  public type: string ;
  constructor(private authService: AuthenticationService, private router: Router)
  {}

  async getType(){
    const ambilType = await Preferences.get({ key: TYPE});
          if( ambilType && ambilType.value){
            let typeuser = ambilType.value;
            this.type = typeuser;
          }
          else{
            
          }
          if(this.type == '0'){
            this.router.navigateByUrl('/pesanan', {replaceUrl: true});
          }
          else if(this.type == '1'){
            this.router.navigateByUrl('/dashboard', {replaceUrl: true});
          }
  }

  canLoad(): Observable<boolean>{
    console.log('cek sesi login');
    return this.authService.isAuthenticated.pipe(
      filter((val) => val !== null),
      take(1),
      map((isAuthenticated) => {
        if(isAuthenticated){
          console.log('ada sesi login, redirect ke dashboard');
          //tambahin if disini?
          this.getType();
          console.log("SS", this.type);
          return false;
        }else{
          console.log('tidak ada sesi login');
          return true;
        }
      })
    );
  }
}
