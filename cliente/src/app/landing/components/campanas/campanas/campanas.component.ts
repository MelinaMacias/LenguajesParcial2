import { Component, OnInit } from '@angular/core';
import { CampanasService } from 'src/app/dashboard/services/campanas.service';

@Component({
  selector: 'app-campanas',
  templateUrl: './campanas.component.html',
  styleUrls: ['./campanas.component.css']
})
export class CampanasComponent implements OnInit {

  campanas: Array <any> = []

  constructor(private campanaService: CampanasService) { }

  ngOnInit(): void {

    this.campanaService.getAllCampanas().subscribe( (campanasList: any) => {

        campanasList.forEach( (campana: any) => {

          this.campanas.push(campana);

        });

    });

  }

}
