
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CampanasService } from 'src/app/dashboard/services/campanas.service';

@Component({
  selector: 'app-detalle-campana',
  templateUrl: './detalle-campana.component.html',
  styleUrls: ['./detalle-campana.component.css']
})
export class DetalleCampanaComponent implements OnInit {

  campana: any;
  idCampana: number;

  constructor(
    private router: ActivatedRoute,
    private campanaService: CampanasService) {

  }

  ngOnInit(): void {

    this.router.params.subscribe( (params: any) => {

      this.campanaService.getCampana(params.id).subscribe( (campana:any) => {
        this.campana = campana;

      });

    });

  }

}
