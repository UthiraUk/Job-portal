import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators ,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-emp-login',
  templateUrl: './emp-login.component.html',
  styleUrls: ['./emp-login.component.css']
})
export class EmpLoginComponent implements OnInit {
  loginForm:any=FormGroup;
  submitted:boolean=false;
  constructor(private formbuilder:FormBuilder, private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm=this.formbuilder.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]]

    })
  }
  get f()
  {
    return this.loginForm.controls;

  }
  onsubmit()

  {
    this.api.getEmployee()  
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        console.log(res)
        return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password
      });
      if(user){
        alert("Login Success !!");
        this.loginForm.reset();
        this.router.navigate(['employer/dashboard'])
      }else{
        alert("user not found !!");
      }
    },err=>{
      alert("Someting went wrong !!")
    })  
  }
  
  
 
}