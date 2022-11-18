import { styled } from "frontity"
import React, {useState} from "react"
import Link from "../link";
import logo from "../../assets/logo.svg"
import kristina from "../../assets/kristina.jpg"
import simpleArrow from "../../assets/simpleArrow.svg"
import advArrow from "../../assets/advArrow.svg"
import oniroCircle from "../../assets/oniroCircle.svg"
import oniroCircleWhiteMedium from "../../assets/oniroCircleWhiteMedium.svg"
import ReactWhatsapp from 'react-whatsapp';
import {useMediaQuery} from 'react-responsive'
    const Container = styled.div`
        width: 100%;
        margin: 0;
        padding: 0;
        display: grid;
        overflow-x: hidden;
        grid-template-columns: 50% 50%;
        /* background: rgb(229,229,229);
        background: linear-gradient(90deg, rgba(229,229,229,1) 50%, rgba(18,26,28,1) 50%); */
        @media screen and (max-width: 600px) {
            display: flex;
            flex-direction: column;
        }
    `
    const LeftSide = styled.div`
        padding: 10% 11%;
        width: 100%;
        background-color: #E5E5E5;
        display: flex;
        justify-content: flex-end;
    `
    const LeftSideContent = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        max-width: 800px;
    `
    const RightSide = styled.div`
        padding: 10% 11%;
        display: flex;
        align-items: center;
    `
    const RightSideContent =styled.div`
        position: relative;
    `
    const MainImage = styled.img`   
        width: 100%;
        max-width: 645px;
    `
    const ActionDivs = styled.div`
        display: grid;
        align-items: center;
        justify-content: space-between;
        position: relative;
        grid-template-columns: auto auto;
    `
    const ActionButton = styled.button`
        background-color: #121A1C;
        color: #FFFFFF;
        border-radius: 50px;
        font-size: 18px;
        text-align: center;
        text-transform: uppercase;
        width: 135px;
        border: none;
        padding: 0.5rem 0;
        cursor: pointer;
        position: relative;
        transition: all 0.1s ease;
        :hover{
            color: #121A1C;
            font-weight: 900;
            background-color: transparent; 
        }
        :hover::before {
            position: absolute;
            content: url(${oniroCircle});
            top: 50%;
            left: 47%;
            transform: translate(-50%, -50%);
        }
    ` 
    const ActionButtonsContainer = styled.div`
        display: grid;
        gap: 25px;
        grid-auto-flow: row;
    `
    const NormalText = styled.p`
        font-size: 28px;
        line-height: 1.1;
        font-weight: 100;
        color: #121A1C;
        margin-bottom: 25px;
    `  
    const HeadingText = styled.h1`
        font-family: "BagindaScript";
        font-size: 48px;
        font-weight: 200;
        line-height: 1.2;
    `
    const InlineArrows = styled.img`
        position: absolute;
        width: ${props => props.width || "50%"};
        left: ${props => props.left || "30%"};
        bottom: ${props => props.bottom || "0"};
        @media screen and (max-width: 768px) {
            bottom: "30%";
        }
        @media screen and (max-width: 600px) {
            bottom: "10%";
        }
    `  
    const FloatingCircle = styled.img`
        z-index:10 ;
        position: absolute;
        top: 10%;
        right: 0%;
        transform: translateX(50%);
    `

    const StyledLink = styled(Link)`
     text-decoration: none;
    `


export function HomePage(props) {
    const isMobile = useMediaQuery({query: `(max-width: 600px)`})
    const isLaptop = useMediaQuery({query: `(max-width: 1024px)`})
    const isTablet = useMediaQuery({query: `(max-width: 768px)`})
    // console.log(props)
    return <Container>
        <LeftSide>
            <LeftSideContent>
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <div>
                    <NormalText>
                        I am <strong>Kristina Shkurti</strong>
                    </NormalText>
                    <NormalText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </NormalText>
                    <NormalText>
                        Proin dignissim accumsan libero ac convallis.<br/>Aenean sit amet iaculis leo.
                        Ut diam mi, rhoncus non massa non, vulputate vestibulum ligula.
                    </NormalText>
                </div>
                <div>
                    <ActionDivs>
                        <HeadingText>Check out my work here</HeadingText>
                        <InlineArrows src={simpleArrow} alt="arrow"/>
                        <StyledLink link="/painting_cat">
                            <ActionButton>
                                Work
                           </ActionButton>
                        </StyledLink>
                        {/* <ActionButton>Work</ActionButton> */}
                    </ActionDivs>
                    <ActionDivs>
                    
                        <HeadingText>Contact me here</HeadingText>
                        {
                            isMobile ? <InlineArrows src={advArrow} bottom="65px" width="35%" left="20%" alt="arrow"/> 
                            : isLaptop ? <InlineArrows src={advArrow} bottom="15px" width="35%" left="20%" alt="arrow"/> 
                            : isTablet ? <InlineArrows src={advArrow} bottom="15px" width="75%" left="10%" alt="arrow"/>
                            : <InlineArrows src={advArrow} bottom="20px" width="40%" left="35%" alt="arrow"/>
                        }
                        <ActionButtonsContainer>
                            <ActionButton>DM</ActionButton>
                                <ReactWhatsapp number="+355672418595" message={"message"} element="span">
                                    <ActionButton>
                                        Whatsapp
                                    </ActionButton>   
                                </ReactWhatsapp>
                            
                        </ActionButtonsContainer>
                    </ActionDivs>
                </div>
            </LeftSideContent>
        </LeftSide>
        <RightSide>
            <RightSideContent>
                <FloatingCircle src={oniroCircleWhiteMedium} alt="cirlce" />
                <MainImage src={kristina} alt="author img" />
            </RightSideContent>
        </RightSide>
    </Container>
}