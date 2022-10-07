import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,} from '@angular/forms';
import { UserService } from "../../../services/custom/users.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  constructor(private userService: UserService) {}
  signupform = new FormGroup({
    name:new FormControl('', [Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(8) ]), 
    address:new FormControl('', [Validators.required]),
    phone:new FormControl('', [Validators.required]),
    age:new FormControl('', [Validators.required]),
  })
  

  ngOnInit(): void {


  }
  loginUser(){
    console.log(this.signupform.value)
  }
  get name(){
    return this.signupform.get('name')
  }
  get email(){
    return this.signupform.get('email')
  }
  get pass(){
    return this.signupform.get('password')
  }

  save() {
    // this.loading = true;

    this.userService.signUp(this.signupform.value).subscribe(
      data => {
        console.log('got response from server', data);
       //  this.loading = false;
        // this.router.navigateByUrl('/login');
        
      },
      error => {
       // this.loading = false;
        console.log('error', error);
      }
    );
  }
}
