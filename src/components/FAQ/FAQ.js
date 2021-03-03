import React from 'react';
import Hero from '../Hero/Hero';
import {faqData} from './../../data/dataStore.js';
import Container from '../Container/Container';

const FAQ = () => (
    <Container>
    <h2><Hero titleText={faqData.title} heroImage={faqData.image}/></h2>
    <p>{faqData.description}</p>
  </Container>
);

export default FAQ;