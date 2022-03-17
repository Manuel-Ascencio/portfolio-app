import React from 'react';
import styled from 'styled-components';
import { AnimatedPage, PageHeader } from '../Components';

const Contact = () => {
  return (
    <ContactStyled>
      <AnimatedPage>
        <PageHeader title={'Contact'} span={'Contact'} />
      </AnimatedPage>
    </ContactStyled>
  );
};

const ContactStyled = styled.section``;

export default Contact;
