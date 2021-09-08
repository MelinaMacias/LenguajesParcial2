
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificacionesService } from 'src/app/dashboard/service/notificacion/notificacion.service';
import { OrganizacionService } from 'src/app/dashboard/services/organizacion.service';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent implements OnInit {

  formInvalid: boolean;
  nombreField: FormControl;
  usuarioField: FormControl;
  correoField: FormControl;
  contrasenaField: FormControl;
  descripcionField: FormControl;

  constructor(
    private organizacionService: OrganizacionService,
    private notificacionesService: NotificacionesService,
    private router: Router
  ) {

    this.correoField = new FormControl('', [Validators.required, Validators.email]);
    this.nombreField = new FormControl('', [Validators.required, Validators.minLength(10)]);
    this.descripcionField = new FormControl('', [
      Validators.required, Validators.minLength(20)
    ]);
    this.usuarioField = new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z][\\w_]{6,}$")
    ]);
    this.contrasenaField = new FormControl('', [
      Validators.required,
      Validators.pattern("^[\\dA-z_]{8,}")
    ]);

  }

  ngOnInit(): void {


  }


  crearCuenta(){

    if( this.nombreField.invalid || this.correoField.invalid
        || this.descripcionField.invalid || this.usuarioField.invalid
        || this.contrasenaField.invalid ) {

      this.formInvalid = true;

    } else {

      this.organizacionService.createOrganizacion({
        "nombre": this.nombreField.value,
        "descripcion": this.descripcionField.value,
        "account": {
          "username": this.usuarioField.value,
          "email": this.correoField.value,
          "password": this.contrasenaField.value
        }
      }).subscribe( (res: any) => {
          this.notificacionesService.notificacionExitosa("Se ha registrado con exito, cuando su cuenta se verifique recibirá un mensaje a su correo con la notificación");
          this.router.navigate(["/"])
        },
        (err) => {this.notificacionesService.notificacionErrores(err)}
      );

    }

  }

}
