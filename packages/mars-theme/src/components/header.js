import { connect, styled } from "frontity";
import Link from "./link";
import MobileMenu from "./menu";
import logo from "../assets/logo.svg"

const Header = ({ state }) => {
  return (
    <>
      <Container>
        
        <StyledLink link="/">
          <Logo src={logo} />
          {/* <Title>{state.frontity.title}</Title> */}
        </StyledLink>
        {/* <MobileMenu /> */}
        <HeaderDesc></HeaderDesc>
      </Container>
      {/* <Nav /> */}
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 5% 5.5% 1%;
  display: flex;
  align-content: center;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`

const Logo = styled.img`
  height: 40px;
  @media screen and (min-width: 768px) {
            height: 60px;
        };
`
const HeaderDesc = styled.p`
  font-size: 24px;
  color: black;
`


