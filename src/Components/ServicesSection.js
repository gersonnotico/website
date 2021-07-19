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
        margin-top: 4rem;
        display: flex;
        justify-content: space-between;
        .mid-card{
            margin:0 1.2rem;
        }
    }

`;

export default ServicesSection;