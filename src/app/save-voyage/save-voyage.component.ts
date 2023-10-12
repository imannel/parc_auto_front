import { Component } from '@angular/core';
import {VoyagesService} from "../services/voyages.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-save-voyage',
  templateUrl: './save-voyage.component.html',
  styleUrls: ['./save-voyage.component.css']
})
export class SaveVoyageComponent {
  constructor(private voyageService:VoyagesService,private fb:FormBuilder) {}
  saveVoyageFormGroup !: FormGroup;
  ngOnInit():void {
    this.saveVoyageFormGroup =this.fb.group({
      date_Debut : this.fb.control(""),
      date_Fin : this.fb.control(""),
      vilDep: this.fb.control(""),
      vilAr: this.fb.control(""),
      typeVehicule: this.fb.control("")
    })
  }

  handleSaveVoyage() {
    let v =this.saveVoyageFormGroup.value;
    this.voyageService.saveVoyages(v).subscribe({
      next:(data)=> alert("driver has been added succefully."),
      error:(err)=> console.log(err)
    })


  }
}

