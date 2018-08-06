import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule, Validators} from '@angular/forms';

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
  schoolInfo:FormGroup;
  contacts:FormGroup;
  address:FormGroup;

  name: FormControl;
  type: FormControl;
  studNos:FormControl;
  teachNos:FormControl;

  priName: FormControl;
  priNum: FormControl;
  priEmail:FormControl;
  secName: FormControl;
  secNum: FormControl;
  secEmail: FormControl;

  addressLine1:  FormControl;
  addressLine2:  FormControl;
  city:  FormControl;
  state: FormControl;

  reqType: FormControl;
  assetType: FormControl;
  assetName: FormControl;
  quantity: FormControl;

  requirement: FormControl;
  proofOfId: FormGroup;
  comments: FormControl;

  constructor() { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.name = new FormControl('',Validators.required);
    this.type = new FormControl('',Validators.required);
    this.studNos = new FormControl('',Validators.required);
    this.teachNos = new FormControl('',Validators.required);

    this.priName = new FormControl('',Validators.required);
    this.priNum = new FormControl('',Validators.required);
    this.priEmail = new FormControl('',[
          Validators.required,
          Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
        ]);
    this.secName = new FormControl();
    this.secNum =  new FormControl();
    this.secEmail = new FormControl('',[
      Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
    ]) 

    this.addressLine1 =  new FormControl('',Validators.required);
    this.addressLine2 = new FormControl('',Validators.required);
    this.city = new FormControl('',Validators.required);
    this.state = new FormControl('',Validators.required);

    this.reqType =  new FormControl('',Validators.required);
    this.assetType = new FormControl('',Validators.required);
    this.assetName = new FormControl('',Validators.required);
    this.quantity = new FormControl('',Validators.required);

    this.comments = new FormControl('',Validators.required);

  }

  createForm() {
    this.schoolRegForm = new FormGroup({
      schoolInfo: new FormGroup({
        name: this.name,
        type: this.type,
        studNos: this.studNos,
        teachNos: this.teachNos
      }),
      contacts: new FormGroup({
        priName: this.priName,
        priNum: this.priNum,
        priEmail:this.priEmail,
        secName:this.secName,
        secNum: this.secNum,
        secEmail: this.secEmail 
      }),
      address: new FormGroup({
        addressLine1: this.addressLine1,
        addressLine2: this.addressLine2,
        city: this.city,
        state: this.state 
      }),
      requirement: new FormGroup({
        reqType: this.reqType,
        assetType: this.assetType,
        assetName:this.assetName,
        quantity:this.quantity 
      }),
      proofOfId: new FormGroup({
        comments: this.comments
       })     
    });
  }
}
