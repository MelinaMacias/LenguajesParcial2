import { Component, OnInit } from '@angular/core';
import { CampanasService } from 'src/app/dashboard/services/campanas.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  lastCampanas: Array<any> = [];

  constructor(private campanaService: CampanasService) {



  }

  ngOnInit(): void {

    this.campanaService.getAllCampanas().subscribe( (campanas: any) => {

      campanas.reverse().splice(0, 3).forEach( (campana: any) => {

        this.lastCampanas.push(campana);

      });

    });

  }

}
