/* ---------------------------------------------- */
/* FOR TEST PURPOSES > to test api/db connection  */
/* ---------------------------------------------- */

const axios = require('axios')
//const fetch = require('node-fetch');
const api = 'http://localhost:5000/api/employees'

const employees = [
  {
    firstName: 'Bojack',
    lastName: 'Horseman',
    department: 'sales',
    start_date: Date.now(),
    dob_date_date: Date.now(),
    street: 'Sunshine alley 789',
    city: 'Hollywood',
    state: 'California',
    zipcode: '92240'
  },
  {
    firstName: 'Bret',
    lastName: 'Hewitt',
    department: 'human resources',
    start_date: Date.now(),
    dob_date_date: Date.now(),
    street: 'Rainy street 653',
    city: 'Hollywood',
    state: 'California',
    zipcode: '92240'
  }
]

/* employees.forEach(employee => {
  
  fetch(api,{
    method: 'POST',
    data: employee,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(employee)
  })
    .then(response => console.log(response))
    .catch(error => console.log(error))
}) */


employees.forEach(employee => {
  axios
    .post(api, employee)
    .then(response => console.log(response))
    .catch(error => console.log(error))
})
