import PropTypes from "prop-types"
import FormLabel from '../FormLabel/FormLabel'
import { InputWrapper, IconWrapper } from '../Employee-form/Employee-form-style'
import checked from '../../../assets/icons/checked.png'
import error from '../../../assets/icons/error.png'

const SimpleInput = ({field, handleInputChange, handleBlur, errors, touched }) => {
    
    let valid = touched[field.fieldName] && !errors[field.fieldName]
    let invalid = touched[field.fieldName] && errors[field.fieldName]
    return (
        <InputWrapper>
            <FormLabel fieldName={field.fieldName}></FormLabel>
            <input 
                type="text"
                id={field._uid}
                name={field.fieldName}
                /* placeholder={field.fieldName} */
                onChange={e => handleInputChange(field.fieldName, e.target.value)}
                onBlur={e => handleBlur(field.fieldName, e.target.value)}
                aria-required="true"
                style={{border: valid? '3px solid #42f5a4': invalid ? '3px solid red': ''}}
            />
            { valid && <IconWrapper><img src={checked} alt="checked-icon"/></IconWrapper> }
            { invalid && <IconWrapper><img src={error} alt="error-icon"/></IconWrapper> }
            { errors[field.fieldName] ? <span>{errors[field.fieldName]}</span> : null }
        </InputWrapper>
    )
}

export default SimpleInput

SimpleInput.propTypes = {
    field: PropTypes.object.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleBlur: PropTypes.func.isRequired
}