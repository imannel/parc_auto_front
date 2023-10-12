import { Component } from '@angular/core';
import {ConducteursService} from "../services/conducteurs.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Conducteur} from "../model/conducteur.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-save-conducteur',
  templateUrl: './save-conducteur.component.html',
  styleUrls: ['./save-conducteur.component.css']
})
export class SaveConducteurComponent {

  constructor(private conducteurService:ConducteursService,private fb:FormBuilder){}
  saveConducteurFormGroup !: FormGroup
  conducteur!:Observable<any>
  ngOnInit():void {
    this.saveConducteurFormGroup =this.fb.group({
      nom : this.fb.control("",[Validators.required,Validators.minLength(4)]),
      prenom : this.fb.control(""),
      cin : this.fb.control("")
    })
  }




  handleSaveConducteur() {
    let c =this.saveConducteurFormGroup.value;
    this.conducteurService.saveConducteur(c).subscribe({
      next:(data)=> alert("driver has been added succefully."),
      error:(err)=> console.log(err)
    })

  }
}
