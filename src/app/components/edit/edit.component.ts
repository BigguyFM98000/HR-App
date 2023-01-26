import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormsModule} from '@angular/forms';
import { Employees } from '../../../employee/employees.model';
import { CrudService } from '../../../services/crud.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  collection: any[] = [];
  public photoUrl = '';
  public showInitials = true;
  public bgColor:string = '';
  public selectedID: any
  public divColor:string = '';
  public initials: string = '';
  public circleColor: string[] = ['#367E18','#790252','#645CAA','#AF0171','#645CAA','#A460ED',
                                  '#42855B','#FF4A4A','#A62349','#FFB200','#781C68','#D61C4E','#FF87B2'];

  message = '';
  userUpdate: any;
  userInfo:any
  id:any 

  constructor(private crudService: CrudService, private router: Router, private actived: ActivatedRoute, private formBuiler: FormBuilder) { }

  ngOnInit(): void {
    this.id = localStorage.getItem("employee_id");
    this.getById(this.id)
  }

  getById(userId:number){
    return this.crudService.get(userId).subscribe({
      next:data =>{
       this.userUpdate = data
       this.divColor = this.color(this.userUpdate.fullname);
           if(this.userUpdate.profilepic){
             this.showInitials = false
           }else{
            this.showInitials = true
          }
      }
    })
  }

  updateEmployee(){
    
    let data = {
      fullname: this.userUpdate.fullname,
      jobtitle: this.userUpdate.jobtitle,
      email: this.userUpdate.email,
      phonenumber: this.userUpdate.phonenumber,
      department: this.userUpdate.department
    };
    
    this.crudService.update(data, this.id).subscribe({
     next:data =>{
      this.router.navigate(['/home'])
     }
    })
  }

  clear(){
    localStorage.clear()
  }

  color(fname:string ){
    fname = fname[0].toUpperCase();
  
      if(fname.match(/[A-C]/i)){
        this.circleColor[0]
        this.bgColor = this.circleColor[0]
      }else if(fname.match(/[D-F]/i)){
       
        this.bgColor = this.circleColor[1]
      }else if(fname.match(/[G-I]/i)){
        this.circleColor[2]
        this.bgColor = this.circleColor[2]
      }else if(fname.match(/[J-L]/i)){
        this.circleColor[3]
        this.bgColor = this.circleColor[3]
      }else if(fname.match(/[M-O]/i)){
        this.circleColor[4]
        this.bgColor = this.circleColor[4]
      }else if(fname.match(/[P-R]/i)){
        this.circleColor[5]
        this.bgColor = this.circleColor[5]
      }else if(fname.match(/[S-U]/i)){
        this.circleColor[6]
        this.bgColor = this.circleColor[6]
      }else if(fname.match(/[V-X]/i)){
        this.circleColor[7]
        this.bgColor = this.circleColor[7]
      }else if(fname.match(/[YZ]/i)){
        this.circleColor[8]
        this.bgColor = this.circleColor[8]
      }else{
        this.circleColor[-1]
        this.bgColor = this.circleColor[-1]
      }
      return this.bgColor
  }

}
