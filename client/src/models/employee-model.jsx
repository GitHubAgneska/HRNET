export class EmployeeModel {
    constructor(firstName, lastName, dob, startDate, address, department) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
        this.startDate = startDate;
        this.address = new EmployeeAddressModel(address.street, address.city, address.state, address.zipcode);
        this.department =department;
    }
}

export class EmployeeAddressModel {
    constructor(street, city, zipcode, state) {
        this.street = street;
        this.city = city;
        this.state = state;
        this.zipcode = zipcode;
    }
}