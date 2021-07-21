import React from 'react';
import styled from 'styled-components';
import Title from '../Components/Title';
import { InnerLayout } from '../styles/Layouts';
import ProgressBar from '../Components/ProgressBar';

function Skills() {
    return(
        <SkillsStyled>
            <Title title={'My Skills'} span={'my Skills'} />
            <InnerLayout>
                <div className="skills">
                    <ProgressBar 
                        title={'HTML5'}
                        width={'95%'}
                        text={'95%'}
                    />
                    <ProgressBar 
                        title={'CSS3'}
                        width={'90%'}
                        text={'90%'}
                    />
                    <ProgressBar 
                        title={'PHP'}
                        width={'90%'}
                        text={'90%'}
                    />
                    <ProgressBar 
                        title={'JAVASCRIPT'}
                        width={'85%'}
                        text={'85%'}
                    />
                    <ProgressBar 
                        title={'PYTHON'}
                        width={'83%'}
                        text={'83%'}
                    />
                    <ProgressBar 
                        title={'JAVA'}
                        width={'70%'}
                        text={'70%'}
                    />
                    <ProgressBar 
                        title={'React JS'}
                        width={'60%'}
                        text={'60%'}
                    />  
                </div>
            </InnerLayout>
        </SkillsStyled>
    ) 
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width:700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;
export default Skills;