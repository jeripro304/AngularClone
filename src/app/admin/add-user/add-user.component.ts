import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AddUserService } from '../AdminService/add-user.service';
import { Status } from 'src/app/Modal/Status';
import { timer } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  adduser:FormGroup;
  User:any;
  stat:any;
  s:any;
  
  constructor(private adminservice:AddUserService){
    this.adduser = new FormGroup({
      fname: new FormControl(),
      lname:new FormControl(),
      dob:new FormControl(),
      plan:new FormControl(),
      email:new FormControl(),
      mobileno:new FormControl(),
      service:new FormControl(),
      address:new FormControl(),
      state:new FormControl(),
      city:new FormControl(),
      zip:new FormControl()
    })
  }

  userRegistration(){
    console.log(this.adduser.value);
    this.adminservice.addUser(this.adduser.value).subscribe((msg)=>{this.stat=msg});
    // this.adminservice.addUser(this.adduser.value).subscribe((msg)=>{this.st=msg});
    timer (7000).subscribe(() => {
      console.log('After 7-second delay...');
      console.log(this.stat.status);
      this.s=this.stat.status
      if (this.s==='created'){
        // alert("User Registration Successful")
        Swal.fire(
          'Registration Successful!',
          '',
          'success'
        )
      }
      else{
        // alert("Something went wrong please recheck your credentials")
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong please recheck your credentials!',
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }
      // Place your code here that you want to execute after the delay.
    });
   
    

    
    
  }

}

