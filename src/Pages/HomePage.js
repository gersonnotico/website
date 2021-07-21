import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Particle from '../Components/Particles';


function HomePage() {
    return(
        <HomePageStyled>
            <div clssName="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hi I'm <span>Gerson Notiço</span></h1>
                <p>
                    Experienced Information Technology with a demonstrated history of working in the telecommunications industry. Skilled in PHP, Java, React JS, Angular, Styled-Components, CSS, JavaScript and HTML. Strong in SQL & MySQL Database, professional with Engineering focused in Systems Development.
                </p>
                <div className="icons">
                <a href="https://web.facebook.com/gersonjose.notico/" className="icon i-facebook">
                    <FacebookIcon />
                </a>
                <a href="https://github.com/gersonnotico" className="icon i-github">
                    <GithubIcon />
                </a>
                <a href="https://www.linkedin.com/in/gersonotico/" className="icon i-linkdin">
                    <LinkedInIcon />
                </a>
            </div>
            </div>
            
        </HomePageStyled>
    )
    
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;

    .p-particles-js{
        position: absolute;
        top: 0;
        left:0;
    }
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: All .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);

                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: 1rem;
                }
            }
        }
    }
`;

export default HomePage;