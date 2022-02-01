import { useState } from "react";
import { validate } from  './form_validators'

let values = { 
    firstName: 'Lester',
    lastName :'Nygaard',
    dob_date: '1964-11-11',
    start_date: '2004-11-11',
    street: '613 Willow Creek Drive',
    city: 'Bemidji',
    state: 'Minnesota',
    zipcode: '56601',
    department: 'Sales'
}

/**
 * Description
 * Attempt to get this chunk out of the form component, not used atm ----- 
 * @param {object} values
 * @returns {boolean}
 */
export const FormValidation = (values) => { 

    const [ errors, setErrors ] = useState({});
    const [ touched, setTouched ] = useState({});
    
    const validateFields = Object.keys(values).reduce( (acc, key) => {
            
            const newError = validate[key](values[key]); // = validate[fieldName](fieldValue)
            const newTouched = { [key]: true };
            return { 
                errors: {
                    ...acc.errors,
                    ...(newError && { [key]: newError })
                },
                touched: {
                    ...acc.touched,
                    ...newTouched
                }
            }
        },
        {
            errors: { ...errors },
            touched: { ...touched }
        }
    );
    setErrors(validateFields.errors);
    setTouched(validateFields.touched);

    if ( 
        !Object.values(validateFields.errors).length // error object = empty
        && Object.values(validateFields.touched).length === Object.values(values).length // all fields were touched
        && Object.values(validateFields.touched).every(t => t === true ) // every touched field is true
    ) {
        return true
    }
}

