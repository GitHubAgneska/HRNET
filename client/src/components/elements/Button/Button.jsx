import PropTypes from "prop-types"
import { StyledBtn } from './Button-style'


const Button = ({ btntype, btnName, handleClick, disabled, width } ) => {

    return ( 
        <StyledBtn
        btntype={btntype}
        width={width}
        disabled={disabled}
        onClick={(e)=>handleClick(e)}
        >{btnName}</StyledBtn>
    )
}
export default Button

Button.propTypes = {
    btntype: PropTypes.string.isRequired,
    btnName: PropTypes.string.isRequired,
    handleClick: PropTypes.func,
    disabled: PropTypes.bool,
    width: PropTypes.string
}

