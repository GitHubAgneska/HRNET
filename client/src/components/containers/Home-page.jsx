import {Link} from 'react-router-dom'
import {HomePageWrapper,WelcomeBlock, WelcomeTitleWrapper, WelcomeLinksWrapper } from './Home-page_style'

const HomePage = () => { 
    return (
        <HomePageWrapper>

            <WelcomeBlock>
                <WelcomeTitleWrapper>
                    <h1>Welcome to HRnet</h1>
                </WelcomeTitleWrapper>

                <WelcomeLinksWrapper>
                    <Link to="/create-employee">Start create a new employee</Link>
                    <Link to="/employees-list">Consult current employees list</Link>
                </WelcomeLinksWrapper>

            </WelcomeBlock>
        </HomePageWrapper>
    )
}
export default HomePage