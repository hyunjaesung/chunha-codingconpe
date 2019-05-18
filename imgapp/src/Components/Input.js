import React from 'react'
import styled from 'styled-components';

const Form = styled.form `
display:flex;
justify-content:center;
align-items:center;
width:100%;
height:10%;
`;

const Input = styled.input `

border-radius:4px;
appearance: none;
border:none;
width:50%;
height:50%;
font-size:15px;
text-align: center;
&:focus{
    outline: none;
}

`;


const SearchInput = ({searchTerm, _updateTerm, _handleSubmit}) => (
<Form onSubmit={_handleSubmit}>
    <Input type="text" placeholder="Type Img What You Want" value={searchTerm} onChange ={_updateTerm}/>
</Form>

);


export default SearchInput;
