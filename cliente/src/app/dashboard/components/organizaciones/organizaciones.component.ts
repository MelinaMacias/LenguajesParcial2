import { Component, OnInit } from '@angular/core';
import { Organizacion } from '../../models/organizacion';
import { OrganizacionService } from '../../services/organizacion.service';

@Component({
  selector: 'app-organizaciones',
  templateUrl: './organizaciones.component.html',
  styleUrls: ['./organizaciones.component.css']
})
export class OrganizacionesComponent implements OnInit {

  organizaciones: Array<Organizacion> = []

  constructor(
    private organizacionService: OrganizacionService
  ) { }

  ngOnInit(): void {

    this.organizacionService.getOrganizaciones().subscribe( (organizaciones: any) => {

      organizaciones.forEach( (organizacion: any) => {
        this.organizaciones.push({
          id : organizacion.id,
          nombre : organizacion.nombre,
          descripcion: organizacion.descripcion,
          is_active : organizacion.account.is_active
        })
      })

    });

  }

}
