import {Component, OnInit} from '@angular/core';
import {VoyagesService} from "../services/voyages.service";
import {Voyage} from "../model/voyage.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-voyages',
  templateUrl: './voyages.component.html',
  styleUrls: ['./voyages.component.css']
})
export class VoyagesComponent implements OnInit{
  voyages!: Observable<Array<Voyage>>
constructor(private voyageService:VoyagesService) {}

  ngOnInit():void { this.getVoyages()
}
  getVoyages():Observable<Array<Voyage>>{
    return this.voyages=this.voyageService.getVoyages();}
}
