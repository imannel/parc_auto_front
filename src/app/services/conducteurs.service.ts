 import { Injectable } from '@angular/core';
 import {HttpClient} from "@angular/common/http";
 import {Observable} from "rxjs";
 import {Conducteur} from "../model/conducteur.model";
 import {FormDatedebfin} from "../model/FormDatedebfin";

@Injectable({
  providedIn: 'root'
})
export class ConducteursService {

  constructor(private http: HttpClient) { }

  public getConducteurs():Observable<Array<Conducteur>>{
    return  this.http.get<Array<Conducteur>>("http://localhost:8080/api/v1/conducteurs")
  }
    public searchConducteurs(keyword : string):Observable<Array<Conducteur>>{
        return  this.http.get<Array<Conducteur>>("http://localhost:8080/api/v1/conducteurs/search?keyword="+keyword)
    }

    public saveConducteur(conducteur:Conducteur):Observable<Conducteur>{
        return this.http.post<Conducteur>("http://localhost:8080/api/v1/conducteurs",conducteur)
    }
    public DeleteConducteur(id:number){
        return this.http.delete("http://localhost:8080/api/v1/conducteurs/"+id);
    }
    public getConducteursDisponibles(formDatedebfin:FormDatedebfin):Observable<Array<Conducteur>>{
        return this.http.post<Array<Conducteur>>("http://localhost:8080/api/v1/listeConducteursDisponibles",formDatedebfin)
    }
}
