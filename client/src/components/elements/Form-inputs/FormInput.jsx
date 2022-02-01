import PropTypes from "prop-types"
import { InputWrapper } from '../Employee-form/Employee-form-style'
import { states } from '../../../data/us-states'
import { departments } from '../../../data/departments'
import { useState } from "react";
import { validate } from "../../../utils/form_validators"

const stateOptions = [...states];
const deps = [ ...departments];

const FormInput = props => {
    
    const { fieldName } = props;
    const [ values, setValues ] = useState({});
    const [ touched, setTouched ] = useState({});
    const [ errors, setErrors ] = useState({});
    
    const handleInputChange = (event) => {
        const {value, name } = event.target
        // const { name, value: newValue, type } = event.target;
        // const value = type === 'number' ? +newValue : newValue; // keep number fields as numbers
       //  if ( name === 'date') { }
        
        setValues({ ...values, [name]: value }); // allows dynamic adding of properties
        console.log('ONCHANGE:=',  values )
        setTouched({ ...touched, [name]: true });
    }

    const handleBlur = (event) => {        
        const { name, value } = event.target;
        console.log('ONBLUR:=', event.target.value);

        const {[name]: removedError, ...rest } = errors; // remove error msg if any
        const error = validate[name](value); // check new error
        // validate field if val touched
        setErrors({ ...rest, ...(error && { [name]: touched[name] && error }) });
    }

        
    return (
        <InputWrapper>
            <label htmlFor={fieldName}>{fieldName}</label>
            
                { (fieldName ==='firstName' ||  fieldName ==='lastName' || fieldName ==='street' || fieldName ==='city')
                    &&    
                    <input
                        type="text"
                        name={fieldName}
                        placeholder={fieldName}
                        onBlur={handleBlur}
                        onChange={handleInputChange} 
                        aria-required="true"
                    /> 
                }
                { (fieldName ==='zipcode')
                    &&    
                    <input
                        type="number"
                        name={fieldName}
                        placeholder={fieldName}
                        onBlur={handleBlur}
                        onChange={handleInputChange} 
                        aria-required="true"
                    /> 
                }
                { (fieldName ==='dob_date' || fieldName ==='start_date')
                    &&    
                    <input
                        type="date"
                        name={fieldName}
                        placeholder={fieldName}
                        onBlur={handleBlur}
                        onChange={handleInputChange} 
                        aria-required="true"
                    /> 
                }

                { fieldName === 'department' &&
                        <select
                            options={deps}
                            name={fieldName}
                            id="`{fieldName}`-select"
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            aria-required="true">
                                { deps.map(i => (
                                    <option key={Math.random()} value={i} >{i}</option>
                                )) }
                        </select>
                }    

                { fieldName === 'state' && 
                        <select
                            options={stateOptions}
                            name={fieldName}
                            id="`{fieldName}`-select"
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            aria-required="true">
                                { Object.keys(stateOptions).map(i => (
                                    <option key={Math.random()} value={stateOptions[i].name} >{stateOptions[i].name}</option>
                                )) }                            
                        </select>
                }
            
            { touched.fieldName && errors.fieldName? <span><small>{errors.fieldName}</small></span>: null }
        </InputWrapper>
    )
} 

export default FormInput
FormInput.propTypes = {fieldName: PropTypes.string}