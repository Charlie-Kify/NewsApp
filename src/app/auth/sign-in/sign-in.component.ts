import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signinForm: FormGroup

  constructor() { 
    this.signinForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('',[Validators.required, Validators.email,Validators.pattern("[^ @]*@[^ @]*")]),
      password: new FormControl('', Validators.required),
      confirmPasssword: new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {
    this.signinForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('',[Validators.required, Validators.email,Validators.pattern("[^ @]*@[^ @]*")]),
      password: new FormControl('', Validators.required),
      confirmPasssword: new FormControl('', Validators.required),
    })
  }

}
