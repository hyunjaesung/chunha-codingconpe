import React from 'react';
import styled from "styled-components";
import SearchInput from './Input';
import Section from "./Section";
import ImgContainer from"./ImgContainer";
import axios from "axios"


const Container = styled.div`
display: flex;
flex-direction:column;
align-items:center;
width : 100vw;
height : 100vh;

`;

const Header = styled.div`
width:100%;
height: 25%;
display:flex;
justify-content:center;
align-items:center;

`;


class MainPage extends React.Component {
    state ={
        searchTerm : "",
        searchImgs : null
    }

    _updateTerm = event => {     
        const {target : {value}} = event; 
        this.setState({searchTerm:value})
    }
    
    _getApi = (searchTerm) => {

        const api = axios.create({
            baseURL : "https://api.giphy.com/v1/gifs/search",
            params:{
                api_key:"dqI1mYZENrgidCRXokUiSdq4Gs9vE7c5",
                q:searchTerm,
                limit:20,
            }
        })

        return api.get();
    }

     _handleSubmit =  async event => {
        event.preventDefault();
        const {searchTerm} = this.state;
        const {data : {data : searchImgs}} = await this._getApi(searchTerm);
        this.setState({searchImgs});
        this.setState({searchTerm:""});
     }

    

    render(){
        const {searchTerm, searchImgs} = this.state;

        console.log(searchImgs);

        return (
    
            <Container>
                <Header>
                    <h1>Search Your Img!</h1>
                </Header>
                <SearchInput searchTerm={searchTerm} _updateTerm={this._updateTerm} _handleSubmit={this._handleSubmit}/>
                <Section>
                    {(searchImgs && searchImgs.map(img => (<ImgContainer key= {img.id} img={img} />)))}
                </Section>
            </Container>
    
        )

    }

    
}





export default MainPage;