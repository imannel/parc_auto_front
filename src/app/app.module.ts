import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ConducteursComponent } from './conducteurs/conducteurs.component';
import { VoyagesComponent } from './voyages/voyages.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { SaveConducteurComponent } from './save-conducteur/save-conducteur.component';
import { SaveVoyageComponent } from './save-voyage/save-voyage.component';
import { AffecterConducteurComponent } from './affecter-conducteur/affecter-conducteur.component';
import { VoyagesSansConducteurComponent } from './voyages-sans-conducteur/voyages-sans-conducteur.component';
import { ConducteursDisponiblesComponent } from './conducteurs-disponibles/conducteurs-disponibles.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ConducteursComponent,
    VoyagesComponent,
    SaveConducteurComponent,
    SaveVoyageComponent,
    AffecterConducteurComponent,
    VoyagesSansConducteurComponent,
    ConducteursDisponiblesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
      ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
