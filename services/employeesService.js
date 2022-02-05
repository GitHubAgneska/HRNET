const Employee = require('../models/Employee')

// CREATE EMPLOYEE REQUEST
module.exports.createEmployee = async employeeData => {
    try {
        const employee = await Employee.findOne({ lastName: employeeData.lastName })
        if (employee) { throw new Error('employee with this name already exists') }

        // ISSU@E HERE : 'await' makes password NULL and prevents request to succeed
        // Postman err : '400 - Error: data and salt arguments required' 
        // ( see https://stackoverflow.com/questions/45015613/error-data-and-salt-arguments-required/45015918)
        // const hashPassword = await bcrypt.hash(employeeData.password, 12)
        // => removing the 'await' keyword allows request to succeed (200 - user created)
        // const hashPassword = bcrypt.hash(employeeData.password, 12)

        const newEmployee = new Employee({
            firstName: employeeData.firstName,
            lastName: employeeData.lastName,
            department: employeeData.department,
            start_date:  employeeData.start_date,
            dob_date: employeeData.dob_date,
            street: employeeData.street,
            city: employeeData.city,
            state: employeeData.state,
            zipcode: employeeData.zipcode,
        })

        let result = await newEmployee.save()
        
        return result

    } catch (error) {
        console.error('Error in EmployeeService.js', error)
        throw new Error(error)
    }
}