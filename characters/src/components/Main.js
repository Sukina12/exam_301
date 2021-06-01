import React, { Component } from 'react';
import axios from 'axios';
import APIData from './APIData';

export class Main extends Component {
  constructor (props){
    super(props);
    this.state = {
      url : process.env.REACT_APP_URL,
      characterData : [],
      showAPIData : false,
      message :'',
      showMessage :false
    }
  }
  componentDidMount = async () =>{
    const responseData = await axios.get (`${this.state.url}/get-characters`);
    this.setState ({
      characterData : responseData.data,
      showAPIData :true
    }); 
  }
  addToFavorite = async (obj)=>{
    const postResponse = await axios.post (`${this.state.url}/favorite` , obj);
    this.setState ({
      message :  postResponse.data,
      showMessage :true

    })
  }
    render() {
        return (
           <>
           {this.state.showMessage &&
           <h2>{this.state.message}</h2>
           }
           {this.state.showAPIData && 
           <APIData 
           characterData ={this.state.characterData}
             addToFavorite ={this.addToFavorite}
           />
           }
           </>
        )
    }
}

export default Main;
