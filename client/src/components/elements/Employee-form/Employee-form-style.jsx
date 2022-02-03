import styled, {keyframes} from 'styled-components'

export const FormWrapper = styled.div`
    @media screen and (min-width:600px) { padding: 2%;}  
    @media screen and (max-width:600px) { padding-bottom: 5%;}
    color: white
`

export const StyledForm = styled.form`
    @media screen and (min-width:600px) { height:100vh;}
`

export const FieldsWrapper = styled.div`
    position: relative;
    @media screen and (max-width:600px) { width:100%; }   
    @media screen and (min-width:600px) { width:60%; height: 70vh;}  
    
    margin: auto;
    overflow: scroll;
    border-radius:5px;
    text-align: center;
`

const iconTransition = keyframes`
    from {
        transform: opacity(0);
        transform: translateX(-55px);
    }
    to {
        transform: opacity(1);
        transform: translateX(-20px);
    }
`

export const IconWrapper = styled.div`
    width:1rem;
    position: absolute;
    @media screen and (max-width:600px) { right: 2px; top: 34px; }
    @media screen and (min-width:600px) { right: 8px; top: 33px; }
    img { max-width: 100%; }
    animation: ${iconTransition} 0.2s linear forwards;
`
export const InputWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 1rem;
    text-align: left;

    input:not([type='date']){ text-transform: capitalize; }
    input, select { 
        border: 1px solid #03846c;
        :focus-within { border: 2px solid lightblue !important; }
    }

    @media screen and (max-width:600px) {
        input, select {
            padding: 8px;
            font-size: 1em;
            border-radius: 10px;
        }
    }   
    @media screen and (min-width:600px) {
        input, select {
            padding: 8px;
            font-size: .8em;
            border-radius: 10px;
            /* border: ${ ({valid}) => valid  ? ' 2px solid green;' :'2px solid lightgrey;' } */
        }
    }  

    select {  background-color: white !important; }
    label { color: #03846c; text-transform: capitalize;}
    ::placeholder { font-weight: light; opacity: 0.6; font-size: 0.5rem !important ; color: grey }  
    :focus-within ::placeholder { opacity:0 }

    span { color: red; height: 5px; width:100%; font-size: 0.8rem}
`
export const FormBtnsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: auto;
    justify-content: space-between;
`