import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {LookUpService} from '../look-up.service';
import {SchoolService} from '../school.service';
import {LookUps} from '../model/lookUps';
import {School} from '../model/school';

@Component({
  selector: 'app-school-registration',
  templateUrl: './school-registration.component.html',
  styleUrls: ['./school-registration.component.css']
})
export class SchoolRegistrationComponent implements OnInit {
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
  district: FormControl;

  reqType: FormControl;
  assetType: FormControl;
  assetName: FormControl;
  quantity: FormControl;

  requirement: FormControl;
  proofOfId: FormGroup;
  comments: FormControl;

  districtsLD:LookUps;
  reqTypesLD:LookUps;
  assetTypesLD:LookUps;
  assetNamesLD:LookUps;
  statesLD:LookUps;
  schoolTypesLD:LookUps;

  constructor(private lookUpService: LookUpService, private schoolService: SchoolService) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
    this.getDistricts();
    this.getReqTypes();
    this.getAssetTypes();
    this.getAssetNames();
    this.getStates();
    this.getSchoolTypes();
  }

  getDistricts() {
    this.lookUpService.getDistricts().subscribe(data => {
      this.districtsLD = <LookUps>data;
    });
  }

  getReqTypes() {
    this.lookUpService.getReqTypes().subscribe(data => {
      this.reqTypesLD = <LookUps>data;
    });
  }

  getAssetTypes() {
    this.lookUpService.getAssetTypes().subscribe(data => {
      this.assetTypesLD = <LookUps>data;
    });
  }

  getAssetNames() {
    this.lookUpService.getAssetTypes().subscribe(data => {
      this.assetNamesLD = <LookUps>data;
    });
  }

  getStates() {
    this.lookUpService.getStates().subscribe(data => {
      this.statesLD = <LookUps>data;
    });
  }

  getSchoolTypes() {
    this.lookUpService.getSchoolTypes().subscribe(data => {
      this.schoolTypesLD = <LookUps>data;
    });
  }

  createFormControls() {
    this.name = new FormControl('',Validators.required);
    this.type = new FormControl('-1',Validators.required);
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
    this.district = new FormControl('-1',Validators.required);
    this.state = new FormControl('-1',Validators.required);

    this.reqType =  new FormControl('-1',Validators.required);
    this.assetType = new FormControl('-1',Validators.required);
    this.assetName = new FormControl('-1',Validators.required);
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
        district: this.district,
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

  addSchoolRegForm(){
    this.schoolService.registerSchool(this.schoolRegForm)
    .subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }
}
