
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NotificacionesService } from 'src/app/dashboard/service/notificacion/notificacion.service';
import { DonadorService } from 'src/app/dashboard/services/donador.service';

@Component({
  selector: 'app-donacion',
  templateUrl: './donacion.component.html',
  styleUrls: ['./donacion.component.css']
})
export class DonacionComponent implements OnInit {

  nombresField: FormControl;
  apellidosField: FormControl;
  correoField: FormControl;
  cantidadDonadaField: FormControl;

  private idCampana: number;

  constructor(
    private router: ActivatedRoute,
    private notificacionService: NotificacionesService,
    private donadoresService: DonadorService
  ) { }

  ngOnInit(): void {

    this.nombresField = new FormControl('', [Validators.required, Validators.minLength(2)]);
    this.apellidosField = new FormControl('', [Validators.required, Validators.minLength(2)]);
    this.correoField =  new FormControl('', [Validators.required, Validators.email]);
    this.cantidadDonadaField = new FormControl('', [Validators.required, Validators.pattern("^[\\d]{1,}$")]);

    this.router.params.subscribe( (params: any) => {

      this.idCampana = parseInt(params.id);

    });

  }

  registrarDonacion(){

    if(this.correoField.valid) {

      this.donadoresService.agregarDonacion({
        "idCampana": this.idCampana,
        "nombres": this.nombresField.value,
        "apellidos": this.apellidosField.value,
        "correo": this.correoField.value,
        "cantidad_donada": this.cantidadDonadaField.value
      })
      .subscribe(
        (donador) => {

          this.notificacionService.notificacionExitosa("Su donación se registro exitosamente");
          this.notificacionService.notificacionExitosa("Muchas gracias!");
          this.nombresField.setValue("");
          this.apellidosField.setValue("");
          this.correoField.setValue("");
          this.cantidadDonadaField.setValue("");

        },
        (err) => { this.notificacionService.notificacionErrores(err); }
      );

    }

  }

}
