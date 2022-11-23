import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController, LoadingController } from "@ionic/angular";
import { ApiService } from "../api.service";
import { Http } from "@capacitor-community/http";


@Component({
  selector: 'app-mahasiswa-edit',
  templateUrl: './mahasiswa-edit.page.html',
  styleUrls: ['./mahasiswa-edit.page.scss'],
})
export class MahasiswaEditPage implements OnInit {
  menu_id: any;
  menu_nama: any;
  menu_stok: any;
  menu_src: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    public LoadingController: LoadingController,
  ) {
    this.route.params.subscribe((param: any) => {
      this.menu_id = param.menu_id;
      console.log(this.menu_id);
      this.ambilMahasiswa(this.menu_id); 
    })
  } 

  ngOnInit() {
    
  }


  ambilMahasiswa(menu_id:any) {
    this._apiService.ambilMahasiswa(menu_id).subscribe((res: any) => {
      console.log('sukses', res);
      let menu = res;
      //console.log(mahasiswa);
      this.menu_nama = menu.menu_nama;
      this.menu_stok = menu.menu_stok;
    }, (error: any) => {
      console.log('error', error);
      alert('gagal ambil data');
    })
  }


  editMahasiswa() {
    let url = this._apiService.apiURL() + "/Menu/edit.php";
    Http.request({
      method: "POST",
      url: url,
      headers: { "Content-Type": "application/json" },
      data: {
        menu_id: this.menu_id,
        menu_nama: this.menu_nama,
        menu_stok: this.menu_stok,
        menu_src: this.menu_src,
      },
    }).then((data) => {
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Berhasil Edit Data Mahasiswa',
        buttons: ['OK'],
      }).then(res => {
        res.present();
      });
      this.router.navigateByUrl('/dashboard');
    }, (err) => {
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Gagal Edit Data Mahasiswa',
        buttons: ['OK']
      }).then(res => {
        res.present()
      });
    })
  }

}
