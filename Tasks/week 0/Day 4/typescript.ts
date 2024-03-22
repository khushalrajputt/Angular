interface IAddress {
    city: string;
    pincode: number;
    street: string;
}

interface IPersonInfo {
    fName: string;
    lName: string;
    age: number;
    address: IAddress;
    contacts: Array<number | string> | null;
}

class PersonInfo implements IPersonInfo {

    constructor(public fName: string, public lName: string, public age: number, public address: IAddress, public contacts: Array<number | string> | null) { }

    getFullName(): string {
        return this.fName + " " + this.lName;
    }

    getAddress(): string {
        return this.address.street + ", " + this.address.city + " - " + this.address.pincode;
    }

}

const address: IAddress = {
    city: "Ahmedabad",
    pincode: 382480,
    street: "Ambika Krupa Society, Nirnaynagar Road, Ranip"
}

const person = new PersonInfo("Khushal", "Rajput", 22, address, [8200765770,9925701612,"rajput.khushal@bacancy.com"]);

console.log("Person's Name : " + person.getFullName());
console.log("Address : " + person.getAddress());
console.log("Person Object : ", person);