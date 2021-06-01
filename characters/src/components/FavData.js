import React, { Component } from 'react'

export class FavData extends Component {
  render() {
    return (
      this.props.characterFavData.map((data,index) => {
        return (
          <div key = 'index'>
            <button onClick={e => {this.props.deleteItem(data.slug)}}>Delete</button>
            <button onClick={e => this.props.updateForm}>Update</button>

            <h1> {data.name}</h1>
            <p>{data.gender}</p>
          </div>
        )
      })
    
    )
  }
}

export default FavData;
