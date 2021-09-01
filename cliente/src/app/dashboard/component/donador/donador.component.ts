
import { Component, OnInit } from '@angular/core';
import { Donador } from '../../models/donador';
import { DonadorService } from '../../services/donador.service';

@Component({
  selector: 'app-donador',
  templateUrl: './donador.component.html',
  styleUrls: ['./donador.component.css']
})
export class DonadorComponent implements OnInit {


  donadores: Array<Donador> = []
  constructor(private donadorService: DonadorService) { }

  ngOnInit(): void {


  this.donadorService.getDonadores().subscribe( (donadores: any) => {

      donadores.forEach( (donador: any) => {
        // this.donadores.push({
        //   id: donador.id,
        //   nombres: donador.nombres,
        //   apellidos: donador.apellidos,
        //   correo: donador.correo,
// cantidad_donada:

        // })


        // })
      })

    });

  //  id: number,
  // nombres: string,
  // apellidos: string,
  // correo: string,
  // cantidad_donada: number
  }




}
