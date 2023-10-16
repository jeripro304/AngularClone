import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/login-page/login-service/login-service.service';
import { UserPostpaidService } from '../UserService/user-postpaid.service';
import { timer } from 'rxjs';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-user-prepaid',
  templateUrl: './user-prepaid.component.html',
  styleUrls: ['./user-prepaid.component.css']
})
export class UserPrepaidComponent implements OnInit{
  userdata:any;
  avaiablegb:any;

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
        this.avaiablegb=this.userdata.availableGB
        this.percentCalculate(this.userdata.availableGB,this.userdata.toatalGB);
        console.log(this.userdata)
        this.dataReduce();
      
      })
    });
  }
  
  ngOnInit() {
    this.dataReduce();
  }

  datausage:any;
  dataReduce(){
    if (this.avaiablegb>0){
      this.avaiablegb=parseFloat((this.avaiablegb-0.3).toFixed(2)) 
    // console.log(this.avaiablegb);
    this.avaiablegb=this.avaiablegb
    }
    timer(3000).subscribe(()=>{
      //  console.log(this.avaiablegb);
      //  this.dataReduce()

       this.psservice.reduceDataUsage(this.userdata,this.avaiablegb).subscribe();

    })
    
  }

  percent:any;
  percentCalculate(currentGb:any,totalGb:any){
    this.percent = parseFloat(((currentGb/totalGb)*100).toFixed(2)) 
    console.log(this.percent);
    

  }

  

}
