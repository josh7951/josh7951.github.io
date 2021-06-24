import React from 'react';
import styled from 'styled-components';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import Title from '../components/Title';
import ContactItem from '../components/ContactItem';
import SubmitButton from '../components/SubmitButton';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';

function ContactPage() {
  const phoneIcon = <PhoneIcon />;
  const emailIcon = <EmailIcon />;
  const locationIcon = <LocationOnIcon />;

  return (
    <MainLayout>
      <Title title={'Contact Me'} span={'Contact Me'} />
      <ContactPageStyle>
        <InnerLayout className={'contact-section'}>
          <div className="left-content">
            <div className="form-title">
              <h4>Send me a message:</h4>
            </div>
            <form action="" className="form">
              <div className="form-field">
                <label htmlFor="name">Name*</label>
                <input name="name" id="name" type="text" />
              </div>

              <div className="form-field">
                <label htmlFor="email">Email*</label>
                <input name="email" id="email" type="email" />
              </div>

              <div className="form-field">
                <label htmlFor="subject">Subject</label>
                <input name="subject" id="subject" type="text" />
              </div>

              <div className="form-field">
                <label htmlFor="message">Message*</label>
                <textarea name="message" id="message" cols="30" rows="10"></textarea>
              </div>
              
              <div className="form-field">             
                <SubmitButton title="Send Message" buttonType="submit" />
              </div>
            </form>
          </div>
          <div className="right-content">
              <ContactItem 
                icon={phoneIcon} 
                title={'Phone Number'}
                contact1={'+1(661) 341-8371'}
                contact2={''}
              />
              <ContactItem 
                icon={emailIcon} 
                title={'Email'}
                contact1={'jmejia7951@gmail.com'}
                contact2={'josh7951@yahoo.com'}
              />              
              <ContactItem 
                icon={locationIcon} 
                title={'Location'}
                contact1={'Palmdale, California 93552'}
                contact2={'United States'}
              />
          </div>
        </InnerLayout>
      </ContactPageStyle>
    </MainLayout>
  )
}

const ContactPageStyle = styled.section`
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);   
    grid-column-gap: 2rem;
    .form-title {
      h4 {
        color: var(--white-color);
        padding: 1rem 0;
        font-size: 1.6rem;
      }
    }
    .form {
      width: 100%;
      .form-field {
        width: 100%;
        margin-top: 2rem;
        position: relative;
        label {
          display: inline-block;
          position: absolute;
          left: 20px;
          top: -19px;
          padding: 0 .5rem;
          background-color: var(--background-dark-color);
          color: inherit;
        }
        input {
          width: 100%;
          border: 1px solid var(--border-color);
          outline: none;
          background: transparent;
          height: 50px;
          padding: 0 15px;
          color: inherit;
        }
        textarea {
          width: 100%;
          background-color: transparent;
          border: 1px solid var(--border-color);
          outline: none;
          color: inherit;
          padding: .8rem 1rem;
        }
      }
    }

    .right-content{
      display: grid;
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default ContactPage;