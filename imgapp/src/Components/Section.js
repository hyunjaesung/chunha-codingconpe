import React from 'react';
import styled from 'styled-components';

const Container = styled.div `
display:flex;
flex-wrap:wrap`;


const Section = props => (
    <Container>
        {props.children}
    </Container>

);

export default Section;