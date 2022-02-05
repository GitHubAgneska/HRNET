import styled from "styled-components"

export const HomePageWrapper = styled.main`
@media screen and (min-width:600px) { height: 100vh;}
display: flex;
background-color: white; 
`

export const WelcomeBlock = styled.section`
@media screen and (max-width:600px) { width: 90%; margin: 30% auto; }
@media screen and (min-width:600px) { width: 70%; margin: auto }
display: flex;flex-direction: column;
align-items: space-evenly;
`

export const WelcomeTitleWrapper = styled.div`
width: 100%; z-index:5;
@media screen and (max-width:600px) { height:50px; }
@media screen and (min-width:600px) { height:55px; }
display: flex;
align-items: center;
justify-content: center;
background-color: white; 
color: #03846c;
h1 { margin: 0; }
`

export const WelcomeLinksWrapper = styled.div`
display:flex;
flex-flow: column nowrap;
align-content: center;
padding: 5%;
a { 
    text-transform: uppercase;
    padding: 5%;margin:5%;
    background-color: #03846c;
    color: white;
    transition: all 0.2s ease-in-out;
}
a:hover, a:active {
    font-weight: bold;
    border: 1px solid #03846c;
    color: #03846c;
    background-color: white;
}
`

