
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrganizacionService {

  httpOptions: any;
  PATH: string = "api/donatela/organizacion/";

  constructor(private http: HttpClient) {

    this.httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": `JWT ${localStorage.getItem("token")}`
      })
    }

  }

  getOrganizaciones(){

    return this.http.get(`${environment.main_url}/${this.PATH}`)

  }

  createOrganizacion(organizacion: any){

    return this.http.post(`${environment.main_url}/${this.PATH}`, organizacion);

  }

  updateOrganizacion(id: number, organizacion: any) {

    return this.http.put(`${environment.main_url}/${this.PATH}${id}/`, organizacion, this.httpOptions);

  }

}
