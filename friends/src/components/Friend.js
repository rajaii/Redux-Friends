import React from 'react';

function Friend (props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.age}</p>
            <p>{props.email}</p>
        </div>
    )
}

export default Friend;