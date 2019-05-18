import React from 'react'
import styled from 'styled-components';

const Form = styled.form ``;

const Input = styled.input ``;


const SearchInput = ({searchTerm, _updateTerm, _handleSubmit}) => (
<Form onSubmit={_handleSubmit}>
    <Input value={searchTerm} onChange ={_updateTerm}/>
</Form>

);


export default SearchInput;
