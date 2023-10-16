import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPageRoutingModule } from './user-page-routing.module';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserNavBarComponent } from './user-nav-bar/user-nav-bar.component';
import { UserPaymentComponent } from './user-payment/user-payment.component';
import { UserPrepaidComponent } from './user-prepaid/user-prepaid.component';
import { ViewplansComponent } from './viewplans/viewplans.component';
import { CheckUtilisationComponent } from './check-utilisation/check-utilisation.component';
import { BillComponent } from './bill/bill.component';


@NgModule({
  declarations: [
    UserHomeComponent,
    UserNavBarComponent,
    UserPaymentComponent,
    UserPrepaidComponent,
    ViewplansComponent,
    CheckUtilisationComponent,
    BillComponent,
    
  ],
  imports: [
    CommonModule,
    UserPageRoutingModule
  ]
})
export class UserPageModule { }
