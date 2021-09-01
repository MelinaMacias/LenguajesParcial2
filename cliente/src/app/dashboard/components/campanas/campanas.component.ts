
import { Component, OnInit } from '@angular/core';
import { Campana } from '../../models/campana';
import { CampanasService } from '../../services/campanas.service';

@Component({
  selector: 'app-campanas',
  templateUrl: './campanas.component.html',
  styleUrls: ['./campanas.component.css']
})
export class CampanasComponent implements OnInit {

  campanas: Array<Campana> = []

  constructor(private campanasService: CampanasService) { }


  ngOnInit(): void {

    this.campanasService.getAllCampanas().subscribe( (campanas: any) => {

      campanas.forEach( (campana: any) => {

        this.campanas.push({
          id: campana.id,
          titulo: campana.titulo,
          descripcion_corta: campana.descripcion_corta,
          estado_campana:campana.estado_campana,
          cantidad_recaudada: campana.cantidad_recaudada,
          recaudacion_esperada: campana.recaudacion_esperada

        });

      });

    });

  }

}
