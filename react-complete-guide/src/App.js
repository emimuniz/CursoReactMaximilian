import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import person from './Person/Person';

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
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
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
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={styles} 
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
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
      {/* <ol>
        <li>Create TWO new components: UserInput and UserOutput</li>
        <li>UserInput should hold an input element, UserOutput two paragraphs</li>
        <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
        <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
        <li>Add state to the App component ( the username) and pass the username to the UserOutput component</li>
        <li>Add a method to manipulate the state ( an event-handler method)</li>
        <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
        <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
        <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
        <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
      </ol> */}
      <UserInput changed={this.usernameChangedHandler} currentName={this.state.username}/>
      <UserOutput userName={this.state.username}/>
      <UserOutput userName={this.state.username}/>
      <UserOutput userName="Emillyn"/>
    </div>
    )
  }
}

export default App;
