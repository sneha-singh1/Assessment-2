export class Add {
    id: number;
    name: string;
    DOB: Date;
    homeaddress: string;
    phone: number;
    

    constructor(id: number, name: string, DOB: Date, homeaddress: string, phone: number) {
        this.id = id;
        this.name = name;
        this.DOB = DOB;
        this.homeaddress = homeaddress;
        this.phone = phone;
       
    }
}