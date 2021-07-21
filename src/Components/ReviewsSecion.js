import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ReviewIem from '../Components/ReviewItem';

function ReviewSection() {
    return(
        <ReviewSectionStyled>
            <Title title={'Reviews'} span={'Reviews'} />
            <InnerLayout>
                <div className="reviews">
                    <ReviewIem 
                    text={'Strong planning experience and demonstrated ability to handle multiple complex projects and meet work deadlines'} 
                    />
                     <ReviewIem 
                    text={'Strong awareness of the importance of data integrity and quality control'} 
                    />
                </div>   
            </InnerLayout>
        </ReviewSectionStyled>
    ) 
}

const ReviewSectionStyled = styled.section`
    .reviews{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
  
`;

export default ReviewSection;