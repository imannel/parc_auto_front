import {numberAttribute} from "@angular/core";
import {Conducteur} from "./conducteur.model";

export interface Voyage{
  id:number;
  date_Debut:Date;
  date_Fin:Date;
  vilDep :string;
  vilAr : string;
  typeVehicule :string;
  conducteurDTO :Conducteur;


}
