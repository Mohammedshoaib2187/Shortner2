import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup
  constructor(private router:Router,private user:UserService) {
    this.loginForm = new FormGroup({
      "email" : new FormControl('',Validators.required),
      "password" : new FormControl('',Validators.required)
    })
   }

  ngOnInit(): void {
  }
  register()
  {
    this.router.navigate(['/register'])

  }
  submit(){
    console.log(this.loginForm.value)
    this.user.login(this.loginForm.value).subscribe((data)=>{
      this.router.navigate(['/dashboard'])
    },(err)=>{
      console.log("Error")
      alert("Please enter correct email/password")
    })
  }
}
