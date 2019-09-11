export class Supplie {

    constructor (_id = '', name = '', brand = '', quantity = 0 ,){
        this._id =_id;
        this. name =  name;
        this.brand = brand;
        this.quantity = quantity;


    }
    _id: string;
    name: string;
    brand: string;
    quantity: number;

}
