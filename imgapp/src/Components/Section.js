import React from 'react';
import styled from 'styled-components';


const Container = styled.div `
display:flex;
flex-wrap:wrap;
justify-content:center;
align-items:center;
width:100%;
height:50%;


`;


const Section = props => (
    <Container>
        
            {props.children}
        
    </Container>

);

export default Section;