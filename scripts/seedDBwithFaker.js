const faker = require("faker")
const moment = require('moment')
const _ = require('lodash')
const states = require('../data/usStates')
const mongoose = require('mongoose')
const uri = process.env.MONGO_URI
const Employee = require('../models/Employee')
const { db } = require("../models/Employee")

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
        
    const newFakeEmployee = new Employee({
            id: Math.ceil(Math.random()).toString(),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            startDate: moment(faker.date.past( 10, new Date())).format('MM/DD/YYYY'),
            department: faker.random.arrayElement([ 'engineering', 'human resources', 'legal', 'marketing', 'sales' ]),
            //department: departments[Math.floor(Math.random() * departments.length)],
            dateOfBirth: moment(faker.date.past(50, new Date(2002, 0, 1))).format('MM/DD/YYYY'),
            street: (faker.datatype.number()).toString() + ' ' + faker.address.streetName(),
            city: faker.address.city(),
            state: randomState.name,
            zipcode: _.times(5, () => _.sample('123456789')).join(''),
        })
        fakeEmployeesList.push(newFakeEmployee)
    }   

    db.employees.insertMany(fakeEmployeesList);

    console.log("Database seeded! :)");

    mongoose.connection.close();


