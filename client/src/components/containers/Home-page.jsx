import {Link} from 'react-router-dom'
import styled from "styled-components"

export const HomePageWrapper = styled.main`

`

export const WelcomeBlock = styled.section`
    background-color: #03846c;
    color: white;
    height: 50vh;
    width: 70%; margin: auto
`


const HomePage = () => { 
    return (
        <HomePageWrapper>

            <WelcomeBlock>
                <h1>Welcome to HRnet</h1>
                <h1>Would you like to</h1>
                <div>
                    <Link to="/create-employee">Start create an new employee</Link>
                    <Link to="/employees-list">Consult current employees list</Link>
                </div>
            </WelcomeBlock>
        </HomePageWrapper>
    )
}
export default HomePage