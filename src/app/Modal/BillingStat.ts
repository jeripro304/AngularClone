export class BillingStat{
    constructor(public userStatId:number,public name:string,public mobileno:number,
        public acccountno:number,public planAmount:number,public toatalGB:number,
        public availableGB:number,public purchasedDate:Date,public todayDate:Date,
        public expiryDate:Date,private expiringDays:number,private status:string,
        public totalBillAmount:number,public penalt:number)
    {

    }
}