import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Employees } from '../../../employee/employees.model';
import { CrudService } from '../../../services/crud.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  addForm = new FormGroup({
    fullname: new FormControl(''),
    jobtitle: new FormControl(''),
    email: new FormControl(''),
    phonenumber: new FormControl(''),
    department: new FormControl(''),
  })
  submitted = false;

  constructor(private crudService: CrudService, private router:Router) { }

  ngOnInit(): void {
  }

  AddEmployee(): void {
    this.submitted = true;

    let data = {
      fullname: this.addForm.value.fullname,
      jobtitle: this.addForm.value.jobtitle,
      email: this.addForm.value.email,
      phonenumber: this.addForm.value.phonenumber,
      department: this.addForm.value.department,
      profilepic: this.addForm.value.profilepic
    };

    this.crudService.create(data)
      .subscribe({
        next: (res) => {
          this.router.navigate(['/home']);
        },
        error: (e) => console.error(e)
      });
  }

}
