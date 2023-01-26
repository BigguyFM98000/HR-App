import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from '../../../services/crud.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  userUpdate: any;
  userInfo:any 
  id:any

  // Profile picture
  public photoUrl = '';
  public showInitials = true;
  public bgColor:string = '';
  public selectedID: any
  public divColor:string = '';
  public initials: string = '';
  public circleColor: string[] = ['#367E18','#790252','#645CAA','#AF0171','#645CAA','#A460ED',
                                  '#42855B','#FF4A4A','#A62349','#FFB200','#781C68','#D61C4E','#FF87B2'];

  constructor(private crudService: CrudService, private actived:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.actived.snapshot.params['id'];
    this.getById(this.id)
  }

  getById(userId:number){
    
    return this.crudService.get(userId).subscribe({
      next:data =>{
       this.userUpdate = data
       localStorage.clear();
       this.divColor = this.color(this.userUpdate.fullname);
      }
    })
    
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

  clear(){
    localStorage.clear()
  }


}
