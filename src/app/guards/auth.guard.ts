import { AuthenticationService } from '../services/authentication.service';
import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Preferences } from '@capacitor/preferences';
import { filter, map, take } from 'rxjs/operators';

const TYPE = 'tipe';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  public type: string ;
  constructor(private authService: AuthenticationService, private router: Router)
  {}

  async getType(){
    const ambilType = await Preferences.get({ key: TYPE});
          if( ambilType && ambilType.value){
            let typeuser = ambilType.value;
            this.type = typeuser;
            this.haveValue();
            this.canLoad();
          }
          else{
            
          }

  }

  canLoad(){
    if(this.type === undefined){
      this.getType();
      return true;
    }
    else{
      const ambilType = Preferences.get({ key: TYPE});
      if(this.type === '0'){ //0=user
        console.log("adalah user")
        return this.authService.isAuthenticated.pipe(
          filter((val) => val !== null),
          take(1),
          map((isAuthenticated) => {
            if(isAuthenticated){
                console.log("typeA", this.type);
                return true;
            }
            else {
              this.router.navigateByUrl('/');
              console.log('anda harus login terlebih dahulu');
              return false;
            }
          })
        );
      }
      else{
        console.log("bukanlah user");
        this.router.navigateByUrl('/');
        return false;
      }
      return true;
      
    }
    
  }

  haveValue(): Observable<boolean>{
    return this.authService.isAuthenticated.pipe(
      filter((val) => val !== null),
      take(1),
      map((isAuthenticated) => {
        if(isAuthenticated){
          if( this.type == '0'){ //0=user
            return true;
          }
          else{
            return false;
          }
        }
        else {
          this.router.navigateByUrl('/');
          console.log('anda harus login terlebih dahulu');
          return false;
        }
      })
    );
  }
}
