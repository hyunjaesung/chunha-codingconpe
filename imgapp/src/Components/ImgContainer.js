import React from 'react';
import styled from 'styled-components';

const Img = styled.div`
    background-image:url(${props => props.url});
    width : 200px;
    height : 200px;
    background-size:cover;
    margin : 10px;
`

const ImgContainer = ({imgUrl}) => (

    <Img url = {imgUrl}/>
)

    
   


    





export default ImgContainer;