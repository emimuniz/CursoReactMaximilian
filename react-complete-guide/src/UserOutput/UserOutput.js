import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
    return(
        <div className="UserOutput">
            <p>Username: {props.userName}</p>
            <p>Some random Text 2 </p>
        </div>
    )
};

export default userOutput;