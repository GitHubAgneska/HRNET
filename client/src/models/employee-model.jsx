export class EmployeeModel {
    constructor(firstName, lastName, dob_date, start_date, address, department) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob_date = dob_date;
        this.start_date = start_date;
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