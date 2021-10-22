import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import{Router} from '@angular/router'
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm : FormGroup

  constructor(private router:Router,private user:UserService) { 
    this.registerForm = new FormGroup({
       "username" : new FormControl('',Validators.required),
       "email" : new FormControl('',Validators.required),
       "password" : new FormControl('',Validators.required)

    })
  }

  ngOnInit(): void {
  }
  submitUser()
  {
    console.log(this.registerForm.value)
    this.user.register(this.registerForm.value).subscribe((data)=>{
      console.log(data)
      this.router.navigate([""])
    })
  }
}
