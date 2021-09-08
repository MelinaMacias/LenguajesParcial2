
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Campana } from '../models/campana';


@Injectable({
  providedIn: 'root'
})
export class CampanasService {

  httpOptions: any;
  PATH: string = "api/donatela/campanas"

  constructor(private http:HttpClient) {

    this.httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": `JWT ${localStorage.getItem("token")}`
      })
    }

  }

  getAllCampanas(){

    return this.http.get(`${environment.main_url}/${this.PATH}`);

  }

  createCampana(campana: any){

    return this.http.post(`${environment.main_url}/${this.PATH}/`, campana, this.httpOptions);

  }

  getCampana(idCampana: number){
    return this.http.get<any>(`${environment.main_url}/${this.PATH}/${idCampana}/`);
  }


}
