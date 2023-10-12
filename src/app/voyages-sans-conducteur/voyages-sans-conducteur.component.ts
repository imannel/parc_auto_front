import {Component, Input, OnInit} from '@angular/core';
import {VoyagesSansConducteurService} from "../services/voyages-sans-conducteur.service";
import {Voyage} from "../model/voyage.model";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-voyages-sans-conducteur',
  templateUrl: './voyages-sans-conducteur.component.html',
  styleUrls: ['./voyages-sans-conducteur.component.css'],
  exportAs:'voyageContext'
})
export class VoyagesSansConducteurComponent implements OnInit{
  constructor(private voyagesSansConducteurService:VoyagesSansConducteurService , private router:Router) {
  }
  voyagesSansConducteur !:Observable<Array<Voyage>>
  @Input()selectedVoyage!: Voyage;
  ngOnInit() {
    this.getVoyagesSansConducteur();
  }
  getVoyagesSansConducteur(){
   return  this.voyagesSansConducteur = this.voyagesSansConducteurService.getvoyagesSansConducteur();

  }

  selectVoyage(v: Voyage) {
    console.log('Voyage selected:', v);
   return this.selectedVoyage=v;
  }

  validateSelection() {
    if (this.selectedVoyage) {
      // naviguer vers le nouveau composant
      this.router.navigate(['/conducteursDisponibles']);
    }
  }


}
