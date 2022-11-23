import { Component, OnInit } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { AuthenticationService } from '../services/authentication.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from "../api.service";
const USERNAME = 'namasaya';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  public nama = '';
  nim: any;
  name: any;
  alamat: any;
  menu: any[];
  constructor(
    public _apiService: ApiService,
    private authService: AuthenticationService, 
    private alertController: AlertController, 
    private router: Router,
    public loadingController: LoadingController,
    ) { }
  
  ngOnInit() {
    this.cekSesi();
    console.log(this.nama);
  }

  async cekSesi(){
    const ambilNama = await Preferences.get({ key: USERNAME});
    if( ambilNama && ambilNama.value){
      let namauser = ambilNama.value;
      this.nama = namauser;
    }
    else{

    }
  }
  logout(){
    this.alertController.create({
      header: 'Perhatian',
      subHeader: 'Yakin Logout Aplikasi?',
      buttons: [
        {
          text: 'Batal',
          handler: (data: any) => {
            console.log('Cancelled', data);
          }
        },
        {
          text: 'Yakin',
          handler: (data: any) => {
            this.authService.logout();
            this.router.navigateByUrl('/', {replaceUrl: true});
          }
        }
      ]
    }).then(res => {
      res.present();
    });
  }

  //

  ionViewDidEnter() {
    console.log("jika selesai loading");
    this.getMahasiswa();
  }

  getMahasiswa() {
    this._apiService.getMahasiswa().subscribe((res: any) => {
      console.log("sukses", res);
      this.menu = res;
    }, (error: any) => {
      console.log("gagal", error);
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Gagal memuat data mahasiswa',
        buttons: ['OK']
      }).then(res => {
        res.present();
      })
    })
  }



  deleteMahasiswa(id:any) {

    this.alertController.create({
      header: 'perhatian',
      subHeader: 'Yakin menghapus data ini?',
      buttons: [
        {
          text: 'Batal',
          handler: (data: any) => {
            console.log('dibatalkan', data);
          }
        },
        {
          text: 'Yakin',
          handler: (data: any) => {
            //jika tekan yakin
            this._apiService.deleteMahasiswa(id).subscribe((res: any) => {
              console.log("sukses", res);
              this.getMahasiswa();
            }, (error: any) => {
              console.log("error", error);
              this.alertController.create({
                header: 'Notifikasi',
                message: 'gagal memuat data mahasiswa',
                buttons: ['OK']
              }).then(res => {
                res.present();
              })
            })
          }
        }
      ]
    }).then(res => {
      res.present();
    })
  }

}
