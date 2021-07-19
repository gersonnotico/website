import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BriefCaseIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BriefCaseIcon />
    const School = <SchoolIcon />
    return(
        <ResumeStyled>
            <Title title={'Resume'} span={'Resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                
                <div className="resume-content">
                    <ResumeItem 
                    year={'2018 - Present'}
                    title={'Full Stack Developer'}
                    subTitle={'Fastrack LDA'}
                    text={'Develop, test, document and implement database projects (Oracle, SQL Server, PL/SQL, MySQL, e Real-time Database,  Develop software in Java, JavaScript, Python, C# and PHP; '}
                    />
                    <ResumeItem 
                    year={'2016 - 2018'}
                    title={'Operation Network Engineer'}
                    subTitle={'Movitel SA'}
                    text={'Specialist in Network Operations in Huawei equipment, Knowledge of end-to-end RF optimization skills, including KPI’s monitoring and parameter auditing and performance optimization.ementation / integration / testing. '}
                    />
                    <ResumeItem 
                    year={'2014 - 2016'}
                    title={'Computer Technician'}
                    subTitle={'Heróis Moçambicanos Secondary School'}
                    text={'Develop Web Application (HTML, CSS, PHP, JavaScript and SQL Database), Migrate data from Excel to SQL Database, Define the data necessary to obtain the requested information in SQL. '}
                    />
                </div>
                <div className="small-title margin-top">
                    <SmallTitle icon={School} title={'Academic education'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                    year={'2012 - 2016'}
                    title={'Computer Science'}
                    subTitle={'Pedagogical University'}
                    text={'Qualification in Network Engineering'}
                    />
                    <ResumeItem 
                    year={'2011 - 2012'}
                    title={'Computer Systems'}
                    subTitle={'CEDCIF'}
                    text={'Analyst - Developer and Applications'}
                    />
                    <ResumeItem 
                    year={'2009 - 2010'}
                    title={'Grade 12'}
                    subTitle={'Quisse Mavota Secondary School'}
                    text={'General Secondary Education'}
                    />
                </div>
                
            </InnerLayout>
        </ResumeStyled>
    ) 
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .resume-content{
        border-left: 2px solid var(--border-color);
    }
    .margin-top{
        margin-top: 4rem;
    }
`;

export default Resume;