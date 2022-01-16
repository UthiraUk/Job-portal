import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { empModel } from './emp model';
import { MustMatch } from './must-match.validator';


@Component({
  selector: 'app-emp-registration',
  templateUrl: './emp-registration.component.html',
  styleUrls: ['./emp-registration.component.css']
})
export class EmpRegistrationComponent implements OnInit {
registerForm:any=FormGroup;
submitted:boolean=false;

empregModelObj: empModel = new empModel();

  constructor(private formbuilder:FormBuilder,private api: ApiService, private router:Router ){ }

  ngOnInit(): void {
   
  this.registerForm=this.formbuilder.group({
    firstname:['',[Validators.required]],
    lastname:['',[Validators.required]],  
    email:['',[Validators.required,Validators.email]],
    username:['',[Validators.required]],
    companyname:['',[Validators.required]],
    password:['',[Validators.required, Validators.minLength(6)]],
    confirmpassword:['',[Validators.required]]

  },{
    validator: MustMatch('password', 'confirmpassword')
});
}
get f()
{
  return this.registerForm.controls;
}
OnRegister()
{
  // this.empregModelObj.firstname = this.registerForm.value.firstname;
  // this.empregModelObj.lastname = this.registerForm.value.lastname;
  // this.empregModelObj.email = this.registerForm.value.email;
  // this.empregModelObj.username = this.registerForm.value.username;
  // this.empregModelObj.companyname = this.registerForm.value.companyname;
  // this.empregModelObj.password = this.registerForm.value.password;
  // this.empregModelObj.confirmpassword = this.registerForm.value.password;

  this.api.postEmpolyee(this.registerForm.value)
  .subscribe(res=>{
    this.submitted = true;
    if (this.registerForm.invalid) {
      return  this.registerForm.reset();
  }
  alert("Register Successfully");
  this.router.navigate(['employer/login']);
  },
  err=>{
    alert("something went wrong");
  }
  )

}

}
