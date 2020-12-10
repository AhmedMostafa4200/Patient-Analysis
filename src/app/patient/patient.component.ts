import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PatientAnalysis } from '../_models/analysis.model';
import { PatientService } from './patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  allPatients: PatientAnalysis[]

  constructor(private router: Router,
            private route: ActivatedRoute,
            public patients: PatientService
    ) { }

  onPreviewDetails (id: number){
    this.router.navigate([`/patients/${id}`])
  }

  displayRightPart(id: number){
    let isRight = false
    this.route.params.subscribe(
      (params: Params)=>{
        if (id === +params["id"]) { 
          isRight = true
        }
        else{
          isRight = false
        }
      }
    )
    return isRight
  }

  leftPartBorder(id: number){
    let isBlueBordered = false
    this.route.params.subscribe(
      (params: Params)=>{
        if (id === +params["id"]) { 
          isBlueBordered = true
        }
        else{
          isBlueBordered = false
        }
      }
    )
    return isBlueBordered
  }

  ngOnInit() {
    this.allPatients = this.patients.allPatients
  }


}
