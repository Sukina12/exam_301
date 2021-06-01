import React, { Component } from 'react';
import axios from 'axios';
import FavData from './FavData';
import UpdateForm from './UpdateForm';

export class Favorite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: process.env.REACT_APP_URL,
      characterFavData: [],
      showFavData: false,
      message: '',
      showForm: false,
      showMessage: false,
      slug_name: '',
      name: '',
      gender: ''
    }
  }
  componentDidMount = async () => {
    const responseData = await axios.get(`${this.state.url}/favorite`);
    this.setState({
      characterFavData: responseData.data,
      showFavData: true
    })
  }
  deleteItem = async (slug) => {
    const responseData = await axios.delete(`${this.state.url}/favorite/${slug}`);
    this.setState({
      characterFavData: responseData.data,
      showFavData: true
    })
  }
  updateName = async (e) => {
    this.setState({
      name: e.target.name,
    })
  }

  updateGender = async (e) => {
    this.setState({
      gender: e.target.gender,
    })
  }

  updateItem = async (e) => {
    e.preventDafault();
    const responseData = await axios.put(`${this.state.url}/favorite/${this.state.slug_name}`, { name: this.state.name, gender: this.state.gender });
    this.setState({
      characterFavData: responseData.data,
      showFavData: true
    })
  }


  updateForm = async () => {
    this.setState({
      showForm :true,
    });
  }
  render() {
    return (
      <>
        {this.state.showForm &&
          <UpdateForm
            name={this.state.name}
            gender={this.state.gender}
            updateName = {this.updateName}
            updateGender ={this.updateGender }
            updateItem ={this.updateItem}
            />
        }
        {this.state.showFavData &&
          <FavData
            characterFavData={this.state.characterFavData}
            deleteItem={this.deleteItem}
            updateForm ={this.updateForm}
          />
        }

      </>
    )
  }
}

export default Favorite;
