var PersonInfo = /** @class */ (function () {
    function PersonInfo(fName, lName, age, address, contacts) {
        this.fName = fName;
        this.lName = lName;
        this.age = age;
        this.address = address;
        this.contacts = contacts;
    }
    PersonInfo.prototype.getFullName = function () {
        return this.fName + " " + this.lName;
    };
    PersonInfo.prototype.getAddress = function () {
        return this.address.street + ", " + this.address.city + " - " + this.address.pincode;
    };
    return PersonInfo;
}());
var address = {
    city: "Ahmedabad",
    pincode: 382480,
    street: "Ambika Krupa Society, Nirnaynagar Road, Ranip"
};
var person = new PersonInfo("Khushal", "Rajput", 22, address, [8200765770, 9925701612, "rajput.khushal@bacancy.com"]);
console.log("Person's Name : " + person.getFullName());
console.log("Address : " + person.getAddress());
console.log("Person Object : ", person);
