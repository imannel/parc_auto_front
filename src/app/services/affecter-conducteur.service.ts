import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {FormConducteurVoyage} from "../model/FormConducteurVoyage";


@Injectable({
  providedIn: 'root'
})
export class AffecterConducteurService {

  constructor(private http: HttpClient) { }

  public affecterConducteur(formConducteurVoyage:FormConducteurVoyage){
   return this.http.post("http://localhost:8080/api/v1/affectationConducteurToVoyage",formConducteurVoyage);
  }
}
