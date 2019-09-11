export class User {

    constructor (_id = '', first_name = '', last_name = '', address ='',
    phone = 0, email = '', perfil ='', password=''){
        this._id =_id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.perfil = perfil;
        this.password= password;
    }
    _id: string;
    first_name: string;
    last_name: string;
    address: string;
    phone: number;
    email: string;
    perfil: string;
    password: string;
}
