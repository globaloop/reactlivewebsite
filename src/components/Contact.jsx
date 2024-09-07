import React from 'react';
import { useParams } from 'react-router-dom';

const Contact  = ({ match }) => {
    const { id , name} = useParams();
    return (
        <h1>I am contact {id} {name} page</h1>
    );
}

export default Contact;