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
    font-size:1rem; color:#03846c;
    background-color: #d9e8e5;
    height:1.5rem; width: 1.5rem; margin: 1%;
    border:1px solid white;
    border-radius: 50%;
    ${ ({currentActivePage}) => currentActivePage && 'background-color:#53E0CB;color: black;'}
    box-shadow: 2px 21px 30px black
`
