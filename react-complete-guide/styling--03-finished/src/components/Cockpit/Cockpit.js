import React, {useEffect} from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = '';

    useEffect(() => {
      console.log('[Cockpit.js] useEfeect');
      //HttpRequest

      const timer = setTimeout(() => {
          alert('Saved data to cloud')
      },1000);

      return () => {
        clearTimeout(timer);
        console.log('[Cockpit.js] cleanup work in useEfeect')
      };
    }, [])

    //realiza somente a primeira vez
    // useEffect(() => {
    //   console.log('[Cockpit.js] useEfeect');
    //   //HttpRequest
    //   setTimeout(() => {
    //     alert('Saved data to cloud')
    //   },1000);
    // }, [])

    if(props.showPersons){
      btnClass = classes.Red;
    }

    if (props.personsLength <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.personsLength<= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button className={btnClass} onClick={props.clicked}>Toggle Persons </button>
        </div>
    );
};

export default React.memo(cockpit);