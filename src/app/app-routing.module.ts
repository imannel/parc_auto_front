import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConducteursComponent} from "./conducteurs/conducteurs.component";
import {VoyagesComponent} from "./voyages/voyages.component";
import {SaveConducteurComponent} from "./save-conducteur/save-conducteur.component";
import {SaveVoyageComponent} from "./save-voyage/save-voyage.component";
import {AffecterConducteurComponent} from "./affecter-conducteur/affecter-conducteur.component";

const routes: Routes = [
  {path:"conducteurs",component:ConducteursComponent},
  {path:"voyages",component:VoyagesComponent},
  {path:"saveConducteur",component:SaveConducteurComponent},
  {path:"saveVoyage",component:SaveVoyageComponent},
  {path:"affecterConducteur",component:AffecterConducteurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
