import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Conducteur} from "../model/conducteur.model";
import {Voyage} from "../model/voyage.model";

@Injectable({
  providedIn: 'root'
})
export class VoyagesService {

  constructor(private http: HttpClient) { }
  public getVoyages():Observable<Array<Voyage>>{
    return  this.http.get<Array<Voyage>>("http://localhost:8080/api/v1/voyages")
  }
  public saveVoyages(voyage: Voyage):Observable<Voyage>{
    return  this.http.post<Voyage>("http://localhost:8080/api/v1/voyages",voyage)
  }
}
