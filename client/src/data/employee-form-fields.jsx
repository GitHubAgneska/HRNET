import {states} from '../data/us-states'
import {departments} from '../data/departments'

export const employeeFormFields = [
    {
        fieldName: 'firstName',
        fieldType: 'text',
        _uid: "eb169f76-4cd9-4513-b673-87c5c7d27e02",
    },
    {
        fieldName:  'lastName', 
        fieldType: 'text',
        _uid: "0c946643-5a83-4545-baea-055b27b51e8a",
    },
    {
        fieldName: 'dob', 
        fieldType: 'date',
        _uid: "5b9b79d2-32f2-42a1-b89f-203dfc0b6b98"
    },
    {
        fieldName: 'startDate',
        fieldType: 'date',
        _uid: "6eff3638-80a7-4427-b07b-4c1be1c6b186"
    },
    {
        fieldName: 'street',
        fieldType: 'text',
        isAddress: true,
        _uid: "7f885969-f8ba-40b9-bf5d-0d57bc9c6a8d"
    },
    {
        fieldName: 'city',
        fieldType: 'text',
        isAddress: true,
        _uid: "f61233e8-565e-43d0-9c14-7d7f220c6020"
    },
    {
        fieldName: 'state',
        fieldType: 'select',
        isAddress: true,
        options: states,
        _uid: "f61233e8-565e-43d0-87b3-7d7f220c6020"
    },
    {
        fieldName:  'zipcode',
        fieldType: 'text',
        isAddress: true,
        _uid: "f00843e8-565e-43d0-87b3-7d7f220c6020"
    },
    {
        fieldName: 'department',
        fieldType: 'select',
        options: departments,
        _uid: "f1437e8-565e-43d0-87b3-7d7f220c6020"
    }
]

