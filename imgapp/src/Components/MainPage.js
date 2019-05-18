import React from 'react';
import styled from "styled-components";
import  data from '../api';
import SearchInput from './Input';

import axios from "axios"


const Container = styled.div``;
const Header = styled.div``;


class MainPage extends React.Component {

    state ={
        searchTerm : "",
        searchImg : []
    }

    _updateTerm = event => {     
        const {target : {value}} = event; 
        this.setState({searchTerm:value})
    }
    
    _getApi = () => {

        const api = axios.create({
            baseURL : "https://api.giphy.com/v1/gifs/search",
            params:{
                api_key:"dqI1mYZENrgidCRXokUiSdq4Gs9vE7c5",
                q:"ryan",
                limit:20,
            }
        })

        api.get().then(res => console.log(res));

        


        // fetch("https://api.giphy.com/v1/gifs/search?api_key=dqI1mYZENrgidCRXokUiSdq4Gs9vE7c5&q=ryan&limit=25&offset=0&rating=G&lang=en")
        // .then(res => console.log(res)).catch(
        //     error => console.log(error))
    }

     _handleSubmit =   event => {
        event.preventDefault();
        const {searchTerm} = this.state;

        this._getApi();

        //console.log(_getApi(searchTerm));

        this.setState({searchTerm:""})
     }


    render(){
        const {searchTerm} = this.state;
        console.log(data);

        return (
    
            <Container>
                <Header>
                    <h1>Search Your Img!</h1>
                </Header>
                <SearchInput searchTerm={searchTerm} _updateTerm={this._updateTerm} _handleSubmit={this._handleSubmit}/>
    
            </Container>
    
        )

    }

    
}





export default MainPage;