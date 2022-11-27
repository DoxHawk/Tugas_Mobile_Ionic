import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController, LoadingController } from "@ionic/angular";
import { ApiService } from "../api.service";
import { Http } from "@capacitor-community/http";

@Component({
  selector: 'app-menu-tambah',
  templateUrl: './menu-tambah.page.html',
  styleUrls: ['./menu-tambah.page.scss'],
})
export class MenuTambahPage implements OnInit {

  menu_id: any;
  menu_nama: any; 
  menu_stok: any;
  menu_src: any;

  constructor(
    private router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController,

  ) {
    
  }

  ngOnInit() {
  }

  addMenu() {
    let url = this._apiService.apiURL() + "/Menu/tambah.php";
    //
    if(this.menu_src == null){
      console.log("srcNull");
      this.menu_src = "default";
    }
    //
    this.menu_id = '';
    Http.request({
      method: "POST",
      url: url,
      headers: { "Content-Type": "application/json" },
      data: {
        menu_id: this.menu_id,
        menu_nama: this.menu_nama,
        menu_stok: this.menu_stok,
        menu_src: this.menu_src
      },
    }).then((data) => {
      /*
      this.menu_id = '';
      this.menu_nama = 'nama';
      this.menu_stok = '2';
      this.menu_src = 'default';
      */
      console.log("berhasil");
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Berhasil Input data Menu',
        buttons: ['OK'],
      }).then(res => {
        res.present();
      });
      this.router.navigateByUrl('/dashboard');
    }, (error) => {
      console.log(error);
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Gagal Input data Menu',
        buttons: ['OK'],
      }).then(res => {
        res.present();
      });
    })
  }


}
