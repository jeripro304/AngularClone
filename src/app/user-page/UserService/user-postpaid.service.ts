import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { timer } from 'rxjs';
import { BillingStat } from 'src/app/Modal/BillingStat';

@Injectable({
  providedIn: 'root'
})
export class UserPostpaidService {

  url:any='http://localhost:8090/billstat';

  constructor(private http:HttpClient) { 
    
  }

  getUserDetails(accno:any){
    
    return this.http.get(`http://localhost:8090/billstat/${accno}`);
    
  }

  BillingStat:BillingStat=new BillingStat(0,'',0,0,0,0,0,new Date(),new Date(),new Date(),0,'',0,0)
  reduceDataUsage(userid:any,gb:any){
    console.log(userid,gb+"from the updating the gb in db");

    // const currentDate=new Date();
    // const date =new DatePipe('en-Us');
    // const formatteddatee= date.transform(currentDate);
    // console.log(formatteddatee);
    

    this.BillingStat.acccountno=userid.acccountno
    this.BillingStat.userStatId=userid.userStatId
    // this.BillingStat.expiringDays=gb;
    this.BillingStat.availableGB=gb;
    this.BillingStat.availableGB=gb;
    console.log(this.BillingStat);
    return this.http.put(this.url+"/updateGb",this.BillingStat);
  }
}
