import PropTypes from "prop-types"
import FormLabel from '../FormLabel/FormLabel'
import { InputWrapper, IconWrapper } from '../Employee-form/Employee-form-style'
import { today } from '../../../utils/form_validators'
import checked from '../../../assets/icons/checked.png'
import error from '../../../assets/icons/error.png'

const DateInput = ({field, fieldName, handleInputChange, handleBlur, errors, touched }) => {
    // console.log('error DATE ELEMENT ==', errors[fieldName]);
    let todaysDate = today().toString();
    // console.log('todaysDate=', todaysDate)
    let valid = touched[field.fieldName] && !errors[field.fieldName]
    let invalid = touched[field.fieldName] && errors[field.fieldName]
    return (
        <InputWrapper>
            <FormLabel fieldName={fieldName}></FormLabel>
            <input
                type="date"
                id={field._uid}
                name={fieldName}
                placeholder={fieldName}
                onChange={e => handleInputChange(field.fieldName, e.target.value)}
                onBlur={e => handleBlur(field.fieldName, e.target.value)} 
                aria-required="true"
                min={fieldName === 'dob_date' ? '1940-01-01':'2000-01-01'}
                max={fieldName === 'dob_date' ? '2000-01-01': todaysDate}
                touched={touched}
                style={{border: valid? '2px solid #42f5a4': invalid ? '1px solid red': ''}}
            />
            { valid && <IconWrapper><img src={checked} alt="checked-icon"/></IconWrapper> }
            { invalid && <IconWrapper><img src={error} alt="error-icon"/></IconWrapper> }
            { errors[fieldName] ? <span>{errors[fieldName]}</span> : null }
        </InputWrapper>
    )
}
export default DateInput

DateInput.propTypes = {
    fieldName: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleBlur: PropTypes.func.isRequired
}