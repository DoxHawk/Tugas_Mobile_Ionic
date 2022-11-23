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

  nim: any;
  alamat: any;
  nama: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController,

  ) { }

  ngOnInit() {
  }

  addMahasiswa() {
    let url = this._apiService.apiURL() + "/tambah.php";
    Http.request({
      method: "POST",
      url: url,
      headers: { "Content-Type": "application/json" },
      data: {
        nim: this.nim,
        nama: this.nama,
        alamat: this.alamat
      },
    }).then((data) => {
      this.nim = '';
      this.nama = '';
      this.alamat = '';
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Berhasil Input data Mahasiswa',
        buttons: ['OK'],
      }).then(res => {
        res.present();
      });
      this.router.navigateByUrl('/mahasiswa');
    }, (error) => {
      console.log(error);
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Gagal Input data Mahasiswa',
        buttons: ['OK'],
      }).then(res => {
        res.present();
      });
    })
  }


}