import { Component } from '@angular/core';
import { UserPostpaidService } from '../UserService/user-postpaid.service';
import { timer } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-nav-bar',
  templateUrl: './user-nav-bar.component.html',
  styleUrls: ['./user-nav-bar.component.css']
})
export class UserNavBarComponent {
  userdata: any;
  avaiablegb: any;
  constructor(private psservice:UserPostpaidService,private route:Router){
    const umMobileNo=sessionStorage.getItem("usermobileno");
    console.log('from the userprepaid comp');
    console.log(umMobileNo);
    this.getUserDetails(umMobileNo);

    
    

  }
  
  getUserDetails(mobilenumber: any){
    console.log(mobilenumber);
    
    console.log('from the postpaid service');
    this.psservice.getUserDetails(mobilenumber).subscribe((data) => {
      timer(4000).subscribe(()=>{
        this.userdata=data;      
      })
    });
  }

  signOut(){
    console.log('into the signout');
    sessionStorage.removeItem("usermobileno");
    this.route.navigate(['/loginpage']);
  }
}
