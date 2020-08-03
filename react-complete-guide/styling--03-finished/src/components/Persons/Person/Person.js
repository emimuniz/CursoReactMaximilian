import React , {Component} from 'react';
import withClasses from '../../../HocClass/WithClass';
import classes from './Person.css';
import Aux from '../../../HocClass/Auxliar';

class Person extends Component{
  render(){
    return(
      <Aux>
        <p  onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input  type="text" onChange={this.props.changed} value={this.props.name} />
      </Aux>
    )
  }
};

export default withClasses(Person, classes.Person);
