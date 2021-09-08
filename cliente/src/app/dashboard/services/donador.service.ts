
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DonadorService {


  constructor(private http:HttpClient) { }

  getDonadores(){

    return this.http.get(`${environment.main_url}/api/donatela/donadores`)

  }

  agregarDonacion(donador: any) {

    return this.http.post(`${environment.main_url}/api/donatela/donadores/`, donador)

  }

}
