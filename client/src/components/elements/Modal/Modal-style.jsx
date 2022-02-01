import styled, {keyframes} from 'styled-components'


const modalTransitionOpen = keyframes`
    from {
        transform: opacity(0);
        transform: translateY(-20px);
    }
    to {
        transform: opacity(1);
        transform: translateY(-55px);
    }
`

export const PageModalWrapper = styled.div`
    height: 100vh;
    width: 100%;
    @media screen and (max-width:600px) { position: fixed }   
    @media screen and (min-width:600px) { position: absolute; }
    
    z-index: 2; top: 0;
    display: flex; align-items: center; justify-content: center;
    
    background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(49,9,121,0.8561625333727241) 0%, rgba(255,13,252,0.8561625333727241) 100%);
    font-size: 1em;
`

export const ModalWrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;justify-content: space-between;
    padding:2%;

    background-color: white; 
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 15px;
    animation: ${modalTransitionOpen} 0.2s linear forwards;
    transition: fade-out 300ms ease-in-out;
    
    @media screen and (max-width:600px) { width:90%; }   
    @media screen and (min-width:600px) { width:60%;} 
`

export const ModalBody = styled.div`
    width: 100%;
`

export const ModalContent = styled.div`
    font-weight: bold;
    font-size: 1em;
    text-transform: capitalize;
    p { margin: 2% auto; }
    p:first-child{ color: darkblue; }
    p:nth-child(2){ color: darkviolet; }
`

export const ModalBtnsWrapper = styled.div`
    height: 70px;
    display: flex; flex-flow: row nowrap;
    justify-content: space-between;
    margin: 0% 5%;
    border-top: 3px solid gray;
`



