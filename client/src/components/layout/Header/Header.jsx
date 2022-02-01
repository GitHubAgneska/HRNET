import {Link} from 'react-router-dom';
import {StyledNav, MainLogoWrapper, MainLogo, LinksWrapper } from './Header-style'

const Header = () => {
    return (
        <StyledNav>
            <MainLogoWrapper>
                <MainLogo>HRNET</MainLogo>
            </MainLogoWrapper>

            <LinksWrapper>
                <Link to="/">home</Link>
                <Link to="/employees-list">employees</Link>
            </LinksWrapper>
        </StyledNav>)
}
export default Header
