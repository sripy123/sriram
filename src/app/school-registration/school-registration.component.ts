import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-school-registration',
  templateUrl: './school-registration.component.html',
  styleUrls: ['./school-registration.component.css']
})
export class SchoolRegistrationComponent implements OnInit {
  schoolTypes:string[] = ['Nursery','Primary','Middle School','Secondary School','Higher Secondary School'];
  districts:string[] = ['Trichy','Vellur','Kanyakumari'];
  states:string[] = ['Tamilnadu','Kerala'];
  reqTypes:string[] = ['New','Maintenance'];
  assetTypes:string[] = ['Sports','Infrastructure'];
  assetNames:string[] = ['Football','Bathroom'];

  schoolRegForm:FormGroup;

  constructor() { }

  ngOnInit() {
    this.schoolRegForm = new FormGroup({
      schoolInfo: new FormGroup({
        name: new FormControl(),
        type: new FormControl(),
        studNos:new FormControl(),
        teachNos:new FormControl()
      }),
      contacts: new FormGroup({
        priName: new FormControl(),
        priNum: new FormControl(),
        priEmail:new FormControl(),
        secName:new FormControl(),
        secNum: new FormControl(),
        secEmail:new FormControl() 
      }),
      address: new FormGroup({
        addressLine1: new FormControl(),
        addressLine2: new FormControl(),
        city:new FormControl(),
        state:new FormControl() 
      }),
      requirement: new FormGroup({
        reqType: new FormControl(),
        assetType: new FormControl(),
        assetName:new FormControl(),
        quantity:new FormControl() 
      }),
      proofOfId: new FormGroup({
        comments: new FormControl()
       })     
    });
  }

}
