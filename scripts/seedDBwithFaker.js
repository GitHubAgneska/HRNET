const faker = require("faker")
const moment = require('moment')
const _ = require('lodash')
const states = require('../data/usStates')
const mongoose = require('mongoose')
require('dotenv').config()
const uri = process.env.MONGO_URI
const Employee = require('../models/Employee')
const axios = require('axios')
const api = 'http://localhost:5000/api/employees'

    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }) 
    console.log("Connected correctly to server");
    
    // const collection = mongoose.db("YYY").collection("XXXX")
    // collection.drop(); // => destroy all data from a collection (run it against proper database and collection)
    
    let fakeEmployeesList = [];

    for (let i = 0; i < 100; i++) {

    let randomState = faker.random.arrayElement(states.states);
        
    const newFakeEmployee = new Object ({
           //  id: Math.ceil(Math.random()).toString(),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            department: faker.random.arrayElement([ 'engineering', 'human resources', 'legal', 'marketing', 'sales' ]),
            start_date: faker.date.past(10, new Date()),
            dob_date: faker.date.past(50, new Date()),
            street: (faker.datatype.number()).toString() + ' ' + faker.address.streetName(),
            city: faker.address.city(),
            state: randomState.name,
            zipcode: _.times(5, () => _.sample('123456789')).join(''),
        })
        fakeEmployeesList.push(newFakeEmployee)
    }   

    // Employee.insertMany(fakeEmployeesList);
    fakeEmployeesList.forEach(employee => {
        axios
            .post(api, employee)
            .then(response => console.log(response))
            .catch(error => console.log(error))
        })

    console.log("Database seeded! :)");

    // mongoose.connection.close();


