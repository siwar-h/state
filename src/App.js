import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Addperson from './Addperson';
import PersonListe from './PersonListe';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      person : [
        {
          userName: "foulen-01",
          email:"foulen-01@email.com",
          age: "20"
        }
      ],
    };
  }

  handleAddPerson = (newPerson) => {
    this.setState({
      person : [...this.state.person , newPerson]
    })
  }

  handleShow = () => {
    this.setState({
      show : !this.state.show
    })
  }
  handleDelete = (id) => {
    this.setState((prevState) => ({
      person: prevState.person.filter(item => item.id !== id), 
    }));
  };
  
  render() {
    return (
      <div className="App">
      <header className="App-header">

        <button onClick={this.handleShow}> show </button>
        
        {
          this.state.show
          }        
        
        
         <hr/>
        <Addperson handleAddPerson = {this.handleAddPerson}/>
        <hr/>
        <PersonListe list ={this.state.person} /> 
        
        {this.state.person.map((p) => (
            <button key={p.id} onClick={() => this.handleDelete(p.id)}>Delete {p.userName}</button>
          ))}    
       
      </header>
    </div>
    )
  }
}

