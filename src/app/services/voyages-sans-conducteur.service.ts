import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Voyage} from "../model/voyage.model";

@Injectable({
  providedIn: 'root'
})
export class VoyagesSansConducteurService {

  constructor(private http:HttpClient) { }

  public getvoyagesSansConducteur():Observable<Array<Voyage>>{
    return this.http.get<Array<Voyage>>('http://localhost:8080/api/v1/voyagesSansConducteur');
  }
}
