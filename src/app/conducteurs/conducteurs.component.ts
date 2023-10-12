import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ConducteursService} from "../services/conducteurs.service";
import {catchError, map, Observable, throwError} from "rxjs";
import {Conducteur} from "../model/conducteur.model";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-conducteurs',
  templateUrl: './conducteurs.component.html',
  styleUrls: ['./conducteurs.component.css']
})
export class ConducteursComponent implements OnInit {
 errorMessage!: string;
 conducteurs!: Observable<Array<Conducteur>>;
 searchformGroup! : FormGroup ;
constructor(private conducteurService : ConducteursService , private fb:FormBuilder){}
  ngOnInit():void {
  this.searchformGroup=this.fb.group({
      keyword : this.fb.control("")
  });
this.handleSearchConducteurs();

  }


    handleSearchConducteurs() {
    let kw=this.searchformGroup.value.keyword;
       this.conducteurs = this.conducteurService.searchConducteurs(kw);


    }


    handleDeleteConducteur(c:Conducteur) {
     alert('are you sure?')
    this.conducteurService.DeleteConducteur(c.id).subscribe({
        next:(resp)=>{this.conducteurs=this.conducteurs.pipe(
          map(data=>{
           let index=data.indexOf(c);
           data.slice(index,1)
            return data;
          })
        );},
        error:(err)=>console.log(err)}
    )
    }
}
