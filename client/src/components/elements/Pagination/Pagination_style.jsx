import styled from "styled-components"

export const PaginationWrapper = styled.div`
    width:100%;
    display: flex; flex-flow: row nowrap;
    justify-content: center;
    position: absolute;
    bottom:2%;
`

export const PageNumber = styled.div`
    display: flex; justify-content: center; align-content:center;
    font-size:1rem; color:white;
    height:1.5rem; width: 1.5rem; margin: 1%;
    border:1px solid white;
    border-radius: 50%;
    ${ ({currentActivePage}) => currentActivePage && 'border:1px solid violet'}
`
