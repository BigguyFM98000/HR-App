import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  passwordType: any = "password";
  submitted = false;
  form: FormGroup;
  
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      
    });
    
  }

  show() {
    if (this.passwordType = "password") {
      this.passwordType = "text";
    }
  }

  hide() {
    if (this.passwordType = "text") {
      this.passwordType = "password";
    }
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
   
  }

  // convenience getter for easy access to form fields
    get f() { return this.form.controls; }


  resetForm(){
    this.submitted = false;
    this.form.reset();
  }
}
