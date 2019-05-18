import React from 'react';
import styled from 'styled-components';



const Img = styled.div`
    background-image:url(${props => props.url});
    width : 200px;
    height : 200px;
    background-size:cover;
    background-position:center center;
    margin : 10px;
    transition : 0.2s ease-in-out;
    border-radius:10px;
    cursor:pointer;
    
    &:hover{
        transform:scale(1.3);
    }
`

const ImgContainer = ({img, _handleClick}) => {
    const imgUrl = img.images.downsized_medium.url;

    return  (
    <a href ={img.url}>
        <Img url = {imgUrl} onClick={()=>_handleClick(img)}/>
    </a>
    )
}

   


    
   


    





export default ImgContainer;