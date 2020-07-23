import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import styled from 'styled-components';
import Radium, {StyleRoot} from  'radium';
import person from './Person/Person';



// const StyledButton = styled.button`
//     background-color: ${props => props.alt ? 'red' : 'green'};
//     color: white;
//     font: inherit;
//     border: 1px solid blue;
//     padding: 8px;
//     cursor: pointer;

//     &:hover{
//       background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
//       color: black;
//     }
// `

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Max', age: 28 },
      { id: 2, name: 'Manu', age: 29 },
      { id: 3, name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { id: 1, name: newName, age: 28 },
        { id: 2, name: 'Manu', age: 29 },
        { id: 3, name: 'Stephanie', age: 27 }
      ]
    });
  };

  togglePersonsHandler = () => {
    const doesPersons = this.state.showPersons;
    this.setState({showPersons: !doesPersons})
  }

  deletePersonsHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };


  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  };

  render() { 
    const styles = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let persons = null; 
    if(this.state.showPersons){       
      persons = (
        <div>
          {this.state.persons.map((persons, index) => {
            return <Person
              click={() => this.deletePersonsHandler(index)}
              name={persons.name}
              age={persons.age}
              key={persons.id}
              changed={(event) => this.nameChangeHandler(event, persons.id)}
            />
          })}
        </div>
      )

      styles.backgroundColor = 'red';
      styles[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    let classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red');
    }

    if(this.state.persons.length <= 1){
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button className="button " alt={this.state.showPersons} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
          {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}


class App2 extends Component{
  
  state = {
    username: 'Super Emillyn'
  }

  usernameChangedHandler = (event) => {
    this.setState({username: event.target.value})
  }

  render(){
    return(
      <div className="App">
        <UserInput changed={this.usernameChangedHandler} currentName={this.state.username}/>
        <UserOutput userName={this.state.username}/>
        <UserOutput userName={this.state.username}/>
        <UserOutput userName="Emillyn"/>
    </div>
    )
  }
}

export default App;
