import { Component, OnInit } from '@angular/core';
import { Organizacion } from '../../models/organizacion';
import { NotificacionesService } from '../../service/notificacion/notificacion.service';
import { OrganizacionService } from '../../services/organizacion.service';

@Component({
  selector: 'app-organizaciones',
  templateUrl: './organizaciones.component.html',
  styleUrls: ['./organizaciones.component.css']
})
export class OrganizacionesComponent implements OnInit {

  organizaciones: Array<Organizacion> = []

  constructor(
    private organizacionService: OrganizacionService,
    private notificacionService: NotificacionesService
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

  activarCuenta(id: number) {

    this.organizacionService.updateOrganizacion(id, {
      "account": {
        "is_active": true
      }
    }).subscribe(
      (organizacion: any) => {

        this.notificacionService.notificacionExitosa(
          `La cuenta de la organización ${organizacion.nombre} fue activada con exito!`);

          let estadoPerfilRow = document.querySelector(`#estadoPerfil-${organizacion.id}`);
          estadoPerfilRow.firstElementChild.remove();
          estadoPerfilRow.innerHTML = '<i class="action-btn fas fa-check-circle text-success pt-1" style="font-size: 1.8em"></i>'

      },
      (err) => { this.notificacionService.notificacionErrores(err) }
    );

  }

}
