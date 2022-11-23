import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public http: HttpClient,
  ) {

  }

  //link API
  apiURL() {
    return "http://localhost/ionicRestoran/api";
  }

  getMahasiswa() {
    return this.http.get(this.apiURL() + '/Menu/tampil.php');
  }

  deleteMahasiswa(id:any) {
    return this.http.delete(this.apiURL() + '/Menu/hapus.php?id=' + id);
  }

  ambilMahasiswa(id:any) {
    return this.http.get(this.apiURL() + '/Menu/lihat.php?id=' + id);
  }


}
