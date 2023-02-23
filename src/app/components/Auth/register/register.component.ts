import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Renderer2,
} from "@angular/core";
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  passwordType: any = "password";
  submitted = false;
  registerForm:FormGroup = this.formBuilder.group({
    firstname: ["", Validators.required],
    lastname: ["", Validators.required],
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(6)]],
  });;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
   
    
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  show() {
    if ((this.passwordType = "password")) {
      this.passwordType = "text";
    }
  }

  hide() {
    if ((this.passwordType = "text")) {
      this.passwordType = "password";
    }
  }

  signUp() {
    this.submitted = true;
    console.log(JSON.stringify(this.registerForm.value, null, 4));
  }
}
