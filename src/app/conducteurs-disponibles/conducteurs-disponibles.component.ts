import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ConducteursService} from "../services/conducteurs.service";
import {Observable} from "rxjs";
import {Conducteur} from "../model/conducteur.model";
import {FormDatedebfin} from "../model/FormDatedebfin";
import {Voyage} from "../model/voyage.model";

@Component({
  selector: 'app-conducteurs-disponibles',
  templateUrl: './conducteurs-disponibles.component.html',
  styleUrls: ['./conducteurs-disponibles.component.css']
})
export class ConducteursDisponiblesComponent implements OnChanges {
  conducteursDisponibles!: Observable<Array<Conducteur>>;
  @Input() selectedVoyage!: Voyage;
  selectedConducteur!: Conducteur;
  dateObj!: FormDatedebfin;

  constructor(private conducteursService: ConducteursService) {}

  ngOnChanges(changes: SimpleChanges): void {

        this.dateObj = {
            dateDeb: this['selectedVoyage'].date_Debut,
            dateFin: this['selectedVoyage'].date_Fin
        };

        this.getConducteursDisponibles();

  }

  selectConducteur(c: Conducteur): void {
    this.selectedConducteur = c;
  }

  getConducteursDisponibles(): void {
    this.conducteursDisponibles = this.conducteursService.getConducteursDisponibles(this.dateObj);
  }

  validateSelection(): void {
    // Ajoutez ici la logique pour valider la sélection du conducteur si nécessaire
  }
}
