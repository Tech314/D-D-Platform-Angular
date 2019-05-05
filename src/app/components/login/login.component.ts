import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;

  constructor(private router: Router) { }

  ngOnInit() {
   // this.myForm = this.FormGroup({
   //   'Email': new FormControl(null, [Validators.required]),
    //  'Password': new FormControl(null, [Validators.required])
   //  })
  }

  onSubmit(){
    this.router.navigate(['/party']);
  }

}
