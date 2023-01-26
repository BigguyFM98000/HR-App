import { Component, OnInit, Input } from '@angular/core';
import { Employees } from '../../../employee/employees.model';
import { CrudService } from '../../../services/crud.service'
import { Employee } from '../../../employee/employees';
import { UpdateModule } from '../../../employee/update.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  myEmployeeList: any;
  @Input() currentTutorials: Employees = {
    id: '',
    fullname: '',
    jobtitle: '',
    email: '',
    phonenumber: '',
    department: ''
  };

  // Profile picture
  public photoUrl = '';
  public showInitials = true;
  public bgColor: string = '';
  public selectedID: any
  public divColor: string = '';
  public initials: string = '';
  public circleColor: string[] = ['#367E18', '#790252', '#645CAA', '#AF0171', '#645CAA', '#A460ED',
    '#42855B', '#FF4A4A', '#A62349', '#FFB200', '#781C68', '#D61C4E', '#FF87B2'];



  // employeeDetail: UpdateModule =  new UpdateModule
  employees: any;
  // tutorials?: Tutorial[];
  currentTutorial: Employees = {};
  currentIndex = -1;
  id = '';
  searchText: any;
  searchResult: any;
  p: number = 1;
  collection: any[] = [];
  firstname: any
  surname: any
  contentEditable: boolean = false
  splitArray: String[] = []

  constructor(private crudService: CrudService, private router: Router) { }

  ngOnInit(): void {
    this.retrieveEmployees();
    const Swal = require('sweetalert2')
  }

  delete(employee_id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteEmployee(employee_id);
        Swal.fire(
          'Deleted!',
          'The employee has been deleted.',
          'success'
        )
      }
    })
  }

  viewCard(employeeDetails: any) {
    this.router.navigateByUrl(`/view/${employeeDetails}`);
  }

  retrieveEmployees(): void {
    this.crudService.getAll().subscribe({
      next: (data: any) => {
        this.employees = data;
        this.selectedID = this.employees[0]._id

        if (this.employees.profilepic) {
          this.showInitials = false
        } else {
          this.showInitials = true
        }
      },
      error: (e) => console.error(e)
    });
  }

  color(fname: string) {
    fname = fname[0].toUpperCase();

    if (fname.match(/[A-C]/i)) {
      this.circleColor[0]
      this.bgColor = this.circleColor[0]
    } else if (fname.match(/[D-F]/i)) {

      this.bgColor = this.circleColor[1]
    } else if (fname.match(/[G-I]/i)) {
      this.circleColor[2]
      this.bgColor = this.circleColor[2]
    } else if (fname.match(/[J-L]/i)) {
      this.circleColor[3]
      this.bgColor = this.circleColor[3]
    } else if (fname.match(/[M-O]/i)) {
      this.circleColor[4]
      this.bgColor = this.circleColor[4]
    } else if (fname.match(/[P-R]/i)) {
      this.circleColor[5]
      this.bgColor = this.circleColor[5]
    } else if (fname.match(/[S-U]/i)) {
      this.circleColor[6]
      this.bgColor = this.circleColor[6]
    } else if (fname.match(/[V-X]/i)) {
      this.circleColor[7]
      this.bgColor = this.circleColor[7]
    } else if (fname.match(/[YZ]/i)) {
      this.circleColor[8]
      this.bgColor = this.circleColor[8]
    } else {
      this.circleColor[-1]
      this.bgColor = this.circleColor[-1]
    }
    return this.bgColor
  }


  deleteEmployee(emplyId: Employee): void {
    this.crudService.delete(emplyId)
      .subscribe({
        next: (res: any) => {
          window.location.reload();
        },
        error: (e: any) => console.error(e)
      });
  }

  editEmployee(employeeDetail: any) {
    this.router.navigate([`/edit/${employeeDetail}`]);
  }

  edit(empId: any) {
    localStorage.setItem('employee_id', empId)
    this.router.navigate([`/edit/${empId}`])
  }

  search(value: string): void {
    this.searchResult = this.employees.filter((val: any) =>
      val.name.toLowerCase().includes(value)
    );
  }

  toggleEditable(event: any) {
    if (event.target.checked) {
      this.contentEditable = true;
    }
  }

  statusUpdate(event: any, index: any) {
    if (event.target.checked) {
      this.contentEditable = false;
    } else {
      this.contentEditable = true;
    }
  }

}
