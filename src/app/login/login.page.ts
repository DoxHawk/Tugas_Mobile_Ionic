import { AuthenticationService } from '../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Http } from '@capacitor-community/http';
import { Preferences } from '@capacitor/preferences';

const TOKEN_KEY = 'token-saya';
const USERNAME = 'namasaya';
const TYPE = 'tipe';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: any;
  password: any;
  type: any;

  constructor(
    private authService: AuthenticationService,
    private alertController: AlertController,//?
  ) { }

  ngOnInit() {
  }

  login(){
    if(this.username != null && this.password != null){
      console.log(this.username + " " + this.password);
      let url = this.authService.apiURL() + "proses_login.php";
      console.log(url);
      Http.request({
        method: "POST",
        url: url,
        headers: { "Content-Type": "application/json"},
        data: {
          username: this.username.trim(),
          password: this.password.trim(),
        },
      }).then((data) => {
        console.log(data);
        if(data['data']['status_login'] == 'berhasil'){
          this.username = '';
          this.password = '';
          this.type = '';//jadiin if
          Preferences.set({ key: TOKEN_KEY, value: data['data']['token']});
          Preferences.set({ key: USERNAME, value: data['data']['username']});
          Preferences.set({ key: TYPE, value: data['data']['type']});
          location.reload();
        }
        else{
          this.alertController.create({
            header: 'Notifikasi',
            message: 'Username dan/atau Password salah',
            buttons: ['Ok']
          }).then(res => {
            res.present();
          });
        }
      }, (err) => {
        this.alertController.create({
          header: 'Notifikasi',
            message: 'Gagal login, periksa koneksi internet' + err,
            buttons: ['Ok']
          }).then(res => {
            res.present();
          });
        })
      }
      else{
        this.alertController.create({
          header: 'Notifikasi',
            message: 'Username dan/atau Password tidak boleh kosong',
            buttons: ['Ok']
          }).then(res => {
            res.present();
          });
        }
      }
    }
