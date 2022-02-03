import PropTypes from "prop-types"
import FormLabel from '../FormLabel/FormLabel'
import { InputWrapper, IconWrapper } from '../Employee-form/Employee-form-style'
import checked from '../../../assets/icons/checked.png'
import error from '../../../assets/icons/error.png'

const SelectInput = ({field, fieldName, values, options, handleInputChange, handleBlur, errors, touched}) => {
    
    let stateValue = values.state;
    let depValue = values.department;
    
    let valid = touched[field.fieldName] && !errors[field.fieldName]
    let invalid = errors[field.fieldName]

    return (
        <InputWrapper>
            <FormLabel fieldName={fieldName}></FormLabel>
            <select
                options={options}
                name={fieldName}
                id={`${fieldName}-select`}
                value={ fieldName ==='state'? stateValue: depValue }
                onChange={e => handleInputChange(field.fieldName, e.target.value)}
                onBlur={e => handleBlur(field.fieldName, e.target.value)}
                aria-required="true"
                style={{border: valid? '3px solid #42f5a4': invalid ? '3px solid red': ''}}
                >
                { fieldName === 'state' && 
                    options.map(i => (
                        <option key={Math.random()} value={i.name}>{i.name} - {i.abbreviation}</option>
                    ))
                }
                { fieldName === 'department' && 
                    options.map(i => (
                        <option key={Math.random()} value={i}>{i}</option>
                    )) 
                }
                
            </select>
            { valid && <IconWrapper><img src={checked} alt="checked-icon"/></IconWrapper> }
            { invalid && <IconWrapper><img src={error} alt="error-icon"/></IconWrapper> }
            { errors[field.fieldName] ? <span>{errors[field.fieldName]}</span> : null }
        </InputWrapper>
    )
}

export default SelectInput

SelectInput.propTypes = {
    fieldName: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleBlur: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired
}