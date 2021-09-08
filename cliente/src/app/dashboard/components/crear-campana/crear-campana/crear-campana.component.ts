
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificacionesService } from 'src/app/dashboard/service/notificacion/notificacion.service';
import { CampanasService } from 'src/app/dashboard/services/campanas.service';


@Component({
  selector: 'app-crear-campana',
  templateUrl: './crear-campana.component.html',
  styleUrls: ['./crear-campana.component.css']
})
export class CrearCampanaComponent implements OnInit {

  tituloField: FormControl
  desCortaField: FormControl
  desLargaField: FormControl
  cantEsperadaField: FormControl
  urlImagenField: FormControl

  constructor(
    private router: Router,
    private campanaService: CampanasService,
    private notificacionService: NotificacionesService) {

    this.tituloField = new FormControl('', [Validators.required, Validators.minLength(10)]);
    this.desCortaField = new FormControl('', [Validators.required, Validators.minLength(20)]);
    this.desLargaField = new FormControl('', [Validators.required, Validators.minLength(50)]);
    this.cantEsperadaField = new FormControl('', [Validators.required, Validators.pattern("^[\\d]{1,}$")]);
    this.urlImagenField = new FormControl('', [Validators.required]);

  }

  ngOnInit(): void {
  }

  registrarCampana() {

    this.campanaService.createCampana({
        "titulo": this.tituloField.value,
        "descripcion_corta": this.desCortaField.value,
        "url_imagen": this.urlImagenField.value,
        "descripcion_completa": this.desLargaField.value,
        "recaudacion_esperada": this.cantEsperadaField.value,
        "estado_campana": "EstadoCampana.ACTIVA"
    }).subscribe(
      (campana: any) => {

        this.notificacionService.notificacionExitosa("La campaña se creo exitosamente");
        this.router.navigate(["../"]);

      },
      (err) => { this.notificacionService.notificacionErrores(err); }
    );

  }

}
