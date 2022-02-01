import { Fragment } from "react";
import PropTypes from "prop-types"
import { titleFormat }  from '../../../utils/title_formator'

const FormLabel = props => {

    const { fieldName } = props;

    return ( 
        <Fragment>
            <label htmlFor={fieldName}>{titleFormat(fieldName)}</label>
        </Fragment>
    )
}

export default FormLabel

FormLabel.propTypes = { 
    fieldName: PropTypes.string.isRequired
}