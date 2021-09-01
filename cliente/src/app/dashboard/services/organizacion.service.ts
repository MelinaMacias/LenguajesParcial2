
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrganizacionService {

  constructor(private http: HttpClient) { }


  getOrganizaciones(){

    return this.http.get(`${environment.main_url}/api/donatela/organizacion`)

  }

}
