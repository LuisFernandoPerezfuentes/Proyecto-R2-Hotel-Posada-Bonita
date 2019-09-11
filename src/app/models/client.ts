export class Client {

    constructor (_id = '', first_name = '', last_name = '', address ='',
    phone = 0, e_mail = ''){
        this._id =_id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.address = address;
        this.phone = phone;
        this.e_mail = e_mail;
    }
    _id: string;
    first_name: string;
    last_name: string;
    address: string;
    phone: number;
    e_mail: string;
}
