import React, { Component } from 'react'

export default class Addperson extends Component {
    constructor() {
        super();
        this.state = {
          userName: "",
          email:"",
          age: ""
        };
      }
      handleInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
      }
    
      handleSubmit = () => {
        this.props.handleAddPerson({
            userName: this.state.userName ,
            email: this.state.email,
            age: this.state.age
        })
      }
  render() {
    return (
      <div>
        <h1>AddPerson</h1>
        <input placeholder="user name" name="userName" onChange={this.handleInput} />
        <input placeholder="email" name="email" onChange={this.handleInput}/>
        <input placeholder="age" name="age"  onChange={this.handleInput} />
        <button onClick={this.handleSubmit}> Submit </button>
        <hr/>
        User Name : {this.state.userName}  <br/>
        Email : {this.state.email}  <br/>
        Age : {this.state.age}

        
      </div>
    )
  }
}
