import React from 'react';
import styled from 'styled-components'
import {MainLayout, InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import PrimaryButton from '../Components/PrimaButton';
import ContactItem from '../Components/ContactItem';
import PhonneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';

function ContactPage() {
    const phone=<PhonneIcon />
    const email=<EmailIcon />
    const location=<LocationOnIcon />
    return(
        <MainLayout>
            <Title title={'Conact'} span={'Conact'} />
            <ContactStyled>
                <InnerLayout className={'contact-section'}>
                    <div classname="left-content">
                        <div className="contact-title">
                            <h4>Get in Touch</h4>
                        </div>
                        <form className="form">
                            <div className="form-field">
                                <label htmlFor="name" >Enter your name*</label>
                                <input type="text" id="name" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="email" >Enter your email*</label>
                                <input type="email" id="email" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="subject" >Enter your subject*</label>
                                <input type="text" id="subject" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="text-area" >Enter your Message*</label>
                                <textarea name="textarea" id="textarea" cols="30" rows="10"></textarea>
                            </div>
                            <div className="form-field">
                                <PrimaryButton title={'Send email'} />
                            </div>
                        </form>
                    </div>
                    <div classname="right-content">
                        <ContactItem
                        icon={phone}
                        title={'Phone'} 
                        contact1={'+258870924930'} 
                        contact2={'+258844640424'} 
                        />
                        <ContactItem
                        icon={email}
                        title={'Email'} 
                        contact1={'gersonotico@gmail.com'} 
                        contact2={'gersonotico@yahoo.com'} 
                        />
                        <ContactItem
                        icon={location}
                        title={'Address'} 
                        contact1={'Bagamoyo, Maputo'} 
                        contact2={'Intaca 2, Maputo'} 
                        />
                    </div>
                </InnerLayout>
            </ContactStyled>
        </MainLayout>
    ) 
}

const ContactStyled = styled.section`
    .contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        .right-content{
            display: flex;
            justify-content: space-between;
            flex-direction: column;
        }
        .contact-title{
            h4{
                color: var(--white-color);
                padding: 1rem 0;
                font-size: 1.8rem;
            }
        }
        .form{
            width: 100%;
            .form-field{
                margin-top: 2rem;
                position: relative;
                width: 100%;
                label{
                    position: absolute;
                    left: 20px;
                    top: -19px;
                    display: inline-block;
                    background-color: var(--background-dark-color);
                    padding: 0rem .5rem;
                    color: inherit;
                }
                input{
                    border: 1px solid var(--border-color);
                    outline: none;
                    background: transparent;
                    height: 50px;
                    padding: 0 15px;
                    width: 100%;
                    color: inherit;
                }
                textarea{
                    background: transparent;
                    border: 1px solid var(--border-color);
                    width: 100%;
                    outline: none;
                    color: inherit;
                    padding: .8rem 1rem;
                }
            }
        }
    }
`;

export default ContactPage;