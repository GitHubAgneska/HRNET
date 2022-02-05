import {Link} from 'react-router-dom'
import styled from "styled-components"

export const HomePageWrapper = styled.main`
    height: 100vh;display: flex;
    background-color: white; 
`

export const WelcomeBlock = styled.section`
    height: 50vh;
    @media screen and (max-width:600px) { width: 90%; margin: 30% auto; }
    @media screen and (min-width:600px) { width: 70%; margin: auto }
    background-color: #03846c;
    color: white;
  
`
const WelcomeTitleWrapper = styled.div`
    width: 100%; z-index:5; top:3rem;
    @media screen and (max-width:600px) { height:50px; }
    @media screen and (min-width:600px) { height:55px; }
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white; 
    color: #03846c;
    h1 { 
        height: 80px;
        margin-bottom: 5%;
    }
`
export const WelcomeLinksWrapper = styled.div`
    display:flex;
    flex-flow: column nowrap;
    align-content: center;
    padding: 5%;
    a { 
        text-transform: uppercase;
        padding: 5%;
        transition: all 0.2s ease-in-out;
    }
    a:hover, a:active { font-weight: bold; border: 1px solid white; }
`


const HomePage = () => { 
    return (
        <HomePageWrapper>

            <WelcomeBlock>
                <WelcomeTitleWrapper><h1>Welcome to HRnet</h1></WelcomeTitleWrapper>

                <WelcomeLinksWrapper>
                    <Link to="/create-employee">Start create an new employee</Link>
                    <Link to="/employees-list">Consult current employees list</Link>
                </WelcomeLinksWrapper>
            </WelcomeBlock>
        </HomePageWrapper>
    )
}
export default HomePage