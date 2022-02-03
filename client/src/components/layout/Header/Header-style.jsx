import styled from 'styled-components'

export const StyledNav = styled.nav`
    @media screen and (min-width:600px) { /* width: 90%; margin: auto; */height: 8vh;}
    @media screen and (max-width:600px) {height:3rem; padding: 3%}
    display: flex;
    flexFlow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;
    background-color: #03846c;
`

export const MainLogoWrapper = styled.div``

export const MainLogo = styled.h1`
    @media screen and (max-width:600px) { font-size:1em }
    @media screen and (min-width:600px) { font-size:1.5em }
    color: white;
    margin: 0;
`

export const LinksWrapper = styled.div`
    width: 25%;
    @media screen and (max-width:600px) {display: inline-grid;text-align: left;}
    display: inline-flex;
    justify-content: flex-end;
    a { margin-left: 10%; color: white;}
    a:hover { text-decoration: underline;}

`