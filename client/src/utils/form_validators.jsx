/* eslint-disable no-unused-vars */

/* FORM VALIDATORS
* ------------------------------------------------------
*/
const error = [
    { type: 'emptyField', message: '' },
    { type: 'invalidChars', message: '' },
    { type: 'length', message: '' },
    { type: 'unsafePw', message: '' }
]

const onlyCharsReg = /^[a-zA-Z\s]*$/; // only chars and whiteSpaces (if several names)
let dateReg = /\d{4}]\d{1,2}\/\d{1,2}\//;
const onlyLettersDigits = /^[0-9a-zA-Z]+$/;

const nameValidation = (fieldName, fieldValue) => {
    // console.log('VALIDATING===>', 'fieldName=',fieldName, 'fieldValue=', fieldValue)
    if ( fieldValue.length < 3) { return `${fieldName} needs to be at least three characters`; }
    if ( fieldName === 'firstName' && ( fieldValue === fieldName || fieldValue.trim() === '')  ) { return `firstName is required`; }
    if ( ! onlyCharsReg.test(fieldValue)) { return `firstName should only contain characters`}
    else { // console.log('name OK'); 
        return null; }
}

const dateValidation = (fieldName, fieldValue) => {
    console.log('date=>',fieldValue );
    // format from input = YYYY-MM-DD
    let date = fieldValue

    let todaysDate = today().toString();
    let min=fieldName === 'dob_date' ? '1940-01-01':'2000-01-01'
    let max=fieldName === 'dob_date' ? '2000-01-01': todaysDate

    if ( date.trim()=== '' ) { return 'date is required'}
    if ( date < min || date > max ) { return 'date is not valid'}
    // console.log('dob_date/start_date OK')
    return null;
}

const streetValidation = (fieldName, fieldValue) => {
    let street = fieldValue; 
    // console.log('street=>',fieldValue);
    if (street.trim() === '') { return 'street is required'; } 
    if (street.length < 3) { return 'street needs to be at least three characters'; } 
    if ( !(/\d/).test(street)) { return 'a street number is required'; }
    if ( !(/[a-zA-Z]/g).test(street)) { return 'a street name is required'; }
    // console.log('street OK')
    return null;
}

const cityValidation = (fieldName, fieldValue) => {
    let city = fieldValue;
    // console.log('city=>',city);
    if (city.trim() === '') { return 'city is required'; }
    if (city.length < 3) { return 'city needs to be at least three characters'; } 
    if ( !(onlyCharsReg).test(city)) { return 'city can only contain characters'; }
    // console.log('city OK');
    return null;
}

const stateValidation = (fieldName, fieldValue) => {
    // console.log('state=>',fieldValue);
    let state = fieldValue;
    if (state === 'Select a state' ) { return 'state is required'; }
    return null;
}

const zipCodeValidation = (fieldName, fieldValue) => {
    let zipcode = fieldValue;
    if (zipcode.trim() === '') { return 'zipcode is required'; } 
    if ( !(/\d/g).test(zipcode) ) { return 'zipcode can only contain digits '; }
    if (zipcode.length !== 5) { return 'us zipcode should be 5 digits'; } 
    // console.log('zipcode OK');
    return null;
}

const departmentValidation = (fieldName, fieldValue) => {
    let department = fieldValue;
    if (department === 'Select a department') { return 'department is required'; }
    return null;
}

/** 
* @Object validate
* @example validate[methodName](fieldName, fieldValue)
*/
export const validate = {

    firstName: firstName => nameValidation('firstName', firstName),
    lastName: lastName => nameValidation('lastName', lastName),
    dob_date: dob_date => dateValidation('dob_date', dob_date),
    start_date: start_date => dateValidation('start_date', start_date),
    street: street => streetValidation('street', street),
    city: city => cityValidation('city', city),
    state: state => stateValidation('state', state),
    zipcode: zipcode => zipCodeValidation('zipcode', zipcode),
    department: department => departmentValidation('department', department)

};

// start_date input => set max to today
export const today = () => {

    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!
    let yyyy = today.getFullYear();
    
    if (dd < 10) { dd = '0' + dd; }
    if (mm < 10) { mm = '0' + mm; } 
        
    today = yyyy + '-' + mm + '-' + dd;
    return today
}

