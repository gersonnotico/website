import React from 'react';
import styled from 'styled-components';
import resume from '../img/resume.jpg';
import PrimaButton from '../Components/PrimaButton';

function ImageSection() {
    return(
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt="" />
            </div>
            <div className="right-content">
                <h4>I am <span> Gerson Notiço</span></h4>
                <p className="paragraphy">
                    Experienced Information Technology with a demonstrated history of working in the telecommunications industry. Skilled in PHP, Java, React JS, Angular, Styled-Components, CSS, JavaScript and HTML. Strong in SQL & MySQL Database, professional with Engineering focused in Systems Development.
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p>: Gerson José Paulo Notiço</p>
                        <p>: 31</p>
                        <p>: Mozambican</p>
                        <p>: English, Portuguese</p>
                        <p>: Maputo</p>
                        <p>: Freelancer</p>
                    </div>
                </div>
                <PrimaButton title={'Download CV'} />
            </div>
        </ImageSectionStyled>
    ) 
}

const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    .left-content{
        width: 100%;
       // height: 60vh;
        img{
            width: 90%;
            object-fit: cover;
        }

    }
    .right-content{
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
                
            }
        }
        .paragraphy{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info {
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;

export default ImageSection;