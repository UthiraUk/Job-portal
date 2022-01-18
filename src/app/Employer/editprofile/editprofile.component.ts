import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { empModel } from '../components/emp-registration/emp model';
import { EmployeeModel } from './Employee';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  employeeData!: any;
  namedata: any;
  registerForm:any=FormGroup;
  empregModelObj: empModel = new empModel();

  
  constructor(private formbuilder: FormBuilder, private api:ApiService) { }
  ngOnInit(): void {

    this.getAllEmployee();

    this.registerForm=this.formbuilder.group({
      firstname:['',[Validators.required]],
      lastname:['',[Validators.required]],  
      email:['',[Validators.required,Validators.email]],
      username:['',[Validators.required]],
      companyname:['',[Validators.required]],
      password:['',[Validators.required, Validators.minLength(6)]],
      confirmpassword:['',[Validators.required]]
    });
  }


getAllEmployee(){
  this.api.getEmployee()
  .subscribe(res=>{
    const data= res;
    console.log(data)
   this.employeeData=res;
  })
}

editData(row: any){

  
  this.empregModelObj['id'] = row.id;
  this.registerForm.controls['firstname'].setValue(row.firstname);
  this.registerForm.controls['lastname'].setValue(row.lastname);
  this.registerForm.controls['email'].setValue(row.email);
  this.registerForm.controls['username'].setValue(row.username);
  this.registerForm.controls['companyname'].setValue(row.companyname);
  this.registerForm.controls['password'].setValue(row.password);
  this.registerForm.controls['confirmpassword'].setValue(row.confirmpassword);

 }

 UpdateData(){
  this.empregModelObj.firstname = this.registerForm.value.firstname;
  this.empregModelObj.lastname = this.registerForm.value.lastname;
  this.empregModelObj.email = this.registerForm.value.email;
  this.empregModelObj.username = this.registerForm.value.username;
  this.empregModelObj.companyname = this.registerForm.value.companyname;
  this.empregModelObj.password = this.registerForm.value.password;
  this.empregModelObj.confirmpassword = this.registerForm.value.confirmpassword;

  this.api.updateEmployee(this.empregModelObj,this.empregModelObj['id'])
  .subscribe(res=>{
    alert("Updateed Successfully");
    let ref =document.getElementById('cancel')
     ref?.click();
     this.getAllEmployee();
  })

 }

 deleteData(row: any){
  this.api.deleteEmployee(row.id)
  .subscribe(res=>{
    alert("Employee Deleted");
    this.getAllEmployee();
  })
}



}