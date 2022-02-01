import styled from 'styled-components'

export const StyledBtn = styled.button` 
    display: block;
    height:100%;
    max-height: 45px;
    width: ${props => props.width ? props.width : '100%'}
    margin-top: 1rem;
    padding: 8px;
    border-radius: 5px;
    font-size: 1.1rem;
    font-weight: bold;
    color: white;
    ${ props => props.btntype ==='action' ? 'background-color: #3150f9;' :' background-color: #8f91a0;' }
    &:disabled { ${ props => props.btntype ==='action' ? 'background-color: #7f91f9;' :' background-color: #d4d7e3;' } }
    &:hover:not([disabled]){ box-shadow: rgba(0, 0, 0, 0.30) 0px 5px 10px; font-size: 1.2rem; }
    transition: all 0.2s;
`
    


/*  action => not disabled : #3150f9  - light blue */
/*  action => disabled : #7f91f9 - medium blue */

/*  cancel => disabled :  #d4d7e3  - light grey */
/*  cancel => not disabled : #8f91a0  - medium grey */
