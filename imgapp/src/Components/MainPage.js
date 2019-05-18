import React from 'react';
import styled from "styled-components";
import SearchInput from './Input';
import Section from "./Section";
import ImgContainer from"./ImgContainer";
import axios from "axios"


const Container = styled.div``;
const Header = styled.div``;


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

        return (
    
            <Container>
                <Header>
                    <h1>Search Your Img!</h1>
                </Header>
                <SearchInput searchTerm={searchTerm} _updateTerm={this._updateTerm} _handleSubmit={this._handleSubmit}/>
                <Section>
                    {(searchImgs && searchImgs.map(img => (<ImgContainer key= {img.id} imgUrl={img.images.original.url}/>)))}
                </Section>
            </Container>
    
        )

    }

    
}





export default MainPage;