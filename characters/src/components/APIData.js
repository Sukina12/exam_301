import React, { Component } from 'react';

export class APIData extends Component {
  render() {
    return (

      this.props.characterData.map((data,index) => {
        return (
          <div key = 'index'>
            <button onClick={e => {this.props.addToFavorite(data)} }>Save To favorites</button>
            <h1> {data.name}</h1>
            <p>{data.gender}</p>
            <img src={data.image} alt='' />
            <img src={data.psiPowers} alt ='' />
          </div>
        )
      })
    
    )
  }
}

export default APIData;
