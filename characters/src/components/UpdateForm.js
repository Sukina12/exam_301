import React, { Component } from 'react'

export class UpdateForm extends Component {
  render() {
    return (
      <div>
        <form>
          <input onChange = {e => this.props.updateName} type ='text' value = {this.props.name}></input>
          <input onChange = {e => this.props.updateGender} type ='text' value = {this.props.gender}></input>
          <input onSubmit ={e => this.props.updateItem(this.props.slug_name,this.props.name,this.props.gender)}></input>
        </form>
      </div>
    )
  }
}

export default UpdateForm;
