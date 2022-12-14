import { styled } from "frontity"
import React, { useState, useEffect} from "react"
import Link from "../link";
import logo from "../../assets/logo.svg"
import heroImg from "../../assets/hero-blackish.jpg"
import oniroCircle from "../../assets/oniroCircle.svg"
import ReactWhatsapp from 'react-whatsapp';
import {useMediaQuery} from 'react-responsive'
import Item from "../list/list-item";
import KristinaPaint from "../../assets/kristina-paint.jpg"
    const Container = styled.div`
        width: 100%;
        margin: 0;
        @media screen and (min-width: 768px) {
            padding: 131px 160px;
        };
    `
    const HeroSection = styled.div`
        background-image: url(${heroImg});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        text-align: center;
        display: grid;
        min-height: 800px;
        width: 100%;
        place-items:center;
        color: white;
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
    const StyledLink = styled(Link)`
     text-decoration: none;
    `
    const Categories = styled.div`
        display: grid;
        grid-template-columns: auto;
        gap:10px;
    `
    const About = styled.div`
        padding: 10px 20px ;
        color: white;
        display: grid;
        gap: 20px;
    `  
    const AboutImg = styled.img`
        width: 100%;
        max-width: 250px;
        margin: auto;
    `
    const AboutText = styled.div`
        display: grid;
        grid-template-columns: auto;
        text-align: justify;
        @media screen and (min-width: 768px) {
            grid-template-columns: 50% 50%;
            gap: 20px;
        };
    `

export function HomePage({state}) {
    const isMobile = useMediaQuery({query: `(max-width: 600px)`})
    const isLaptop = useMediaQuery({query: `(max-width: 1024px)`})
    const isTablet = useMediaQuery({query: `(max-width: 768px)`})
    const [catsToShow, setCatsToShow] = useState()

    let paint_cat = [
        {
            "id": 3,
            "link": "/painting_cat/3d-texture-art/",
            "name": "3D Texture Art",
            "slug": "3d-texture-art",
            "taxonomy": "painting_cat",
            "acf": {
                "category_image": "https://admin.onirostudio.com/wp-content/uploads/2022/12/emosional-self.jpg"
            },
            "_links": {
                "self": [
                    {
                        "href": "https://admin.onirostudio.com/wp-json/wp/v2/painting_cat/3"
                    }
                ],
                "collection": [
                    {
                        "href": "https://admin.onirostudio.com/wp-json/wp/v2/painting_cat"
                    }
                ],
                "about": [
                    {
                        "href": "https://admin.onirostudio.com/wp-json/wp/v2/taxonomies/painting_cat"
                    }
                ],
                "wp:post_type": [
                    {
                        "href": "https://admin.onirostudio.com/wp-json/wp/v2/painting?painting_cat=3"
                    }
                ],
                "curies": [
                    {
                        "name": "wp",
                        "href": "https://api.w.org/{rel}",
                        "templated": true
                    }
                ]
            }
        },
        {
            "id": 5,
            "link": "/painting_cat/colourful/",
            "name": "Colourful",
            "slug": "colourful",
            "taxonomy": "painting_cat",
            "acf": {
                "category_image": "https://admin.onirostudio.com/wp-content/uploads/2022/12/spirit.jpg"
            },
            "_links": {
                "self": [
                    {
                        "href": "https://admin.onirostudio.com/wp-json/wp/v2/painting_cat/5"
                    }
                ],
                "collection": [
                    {
                        "href": "https://admin.onirostudio.com/wp-json/wp/v2/painting_cat"
                    }
                ],
                "about": [
                    {
                        "href": "https://admin.onirostudio.com/wp-json/wp/v2/taxonomies/painting_cat"
                    }
                ],
                "wp:post_type": [
                    {
                        "href": "https://admin.onirostudio.com/wp-json/wp/v2/painting?painting_cat=5"
                    }
                ],
                "curies": [
                    {
                        "name": "wp",
                        "href": "https://api.w.org/{rel}",
                        "templated": true
                    }
                ]
            }
        },
        {
            "id": 6,
            "link": "/painting_cat/resin-art/",
            "name": "Resin Art",
            "slug": "resin-art",
            "taxonomy": "painting_cat",
            "acf": {
                "category_image": "https://admin.onirostudio.com/wp-content/uploads/2022/12/the-deepths-of-Jonian-.png"
            },
            "_links": {
                "self": [
                    {
                        "href": "https://admin.onirostudio.com/wp-json/wp/v2/painting_cat/6"
                    }
                ],
                "collection": [
                    {
                        "href": "https://admin.onirostudio.com/wp-json/wp/v2/painting_cat"
                    }
                ],
                "about": [
                    {
                        "href": "https://admin.onirostudio.com/wp-json/wp/v2/taxonomies/painting_cat"
                    }
                ],
                "wp:post_type": [
                    {
                        "href": "https://admin.onirostudio.com/wp-json/wp/v2/painting?painting_cat=6"
                    }
                ],
                "curies": [
                    {
                        "name": "wp",
                        "href": "https://api.w.org/{rel}",
                        "templated": true
                    }
                ]
            }
        }
    ]
    // console.log(props)
    return <Container>
        <HeroSection>
            <h1>
                Unique art pieces for your interior <br/> since 2016
            </h1>
        </HeroSection>
        <Categories>
            {
                paint_cat.map((painting => {
                    return <Item key={painting.id} item={painting}/>
                }))
            }
        </Categories>
        <About>
            <AboutImg src={KristinaPaint} />
            <AboutText>
                <div>
                    <h2>Hello!</h2>
                    <p>Hello! I am Kristina Shkurti, the artist behind ONIRO studio (???Dream studio ??? from Greek) and all the handmade artworks since 2016,based in Tirana,Albania.</p>
                    <p>
Graduated in Architecture but art chose me as part of my heart and soul since I was a child. I did my first exhibition in 2017 with abstract acrylic paintings named ???Gjendje Pragnore??? .
For 6 years now I am a full time artist with hundred of artworks sold worldwide.
</p>
                </div>
                <div>
                    <p>
                        As an contemporary artist l experiment with different materials to create special effects to express my feelings and concerns through my art. Materials such as resin,3D art texture,acrylics , oil colors,spray ext. My art can be minimalist only by some black brush strokes but also colorful and daydreaming.
                    </p>
                    <p>
                        My inspiration come from my every day life,from our beautiful nature and interesting compositions and colors that  offers us.
                        As an observational person I am also inspired from people???s stories and portraits. Every time I try to bring the best quality and different original ideas in my creations.
                        Feel free to look around and let me know if you are interested in one of the available artworks or if I can create you one.
                    </p>
                </div>
            </AboutText>
        </About>
    </Container>
}