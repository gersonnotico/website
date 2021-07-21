import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ServiceCard from './ServiceCard';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

function ServicesSection() {
    return(
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Services'} span={'Services'} />
                <div className="Services">
                    <ServiceCard 
                        image={design}
                        title={'Web Design'}
                        paragraph={'Design of responsive layouts and communication to meet the demands of web technologies.'}
                    />
                    <div classNeme="mid-card">
                        <ServiceCard 
                            image={intelligence}
                            title={'Intelligence'}
                            paragraph={'Develop solutions in Artificial Intelligence, test code, maintain versioning proper.'}
                        />
                    </div>

                    <ServiceCard 
                        image={gamedev}
                        title={'App Develop'}
                        paragraph={'Develop WebApp & Desktop App, test, document and implement database projects.'}
                    />
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
 
    ) 
}

const ServicesSectionStyled = styled.section`
    .Services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
    }

`;

export default ServicesSection;