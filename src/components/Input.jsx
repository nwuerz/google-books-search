import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

const Input = () => {
    return ( 
        <Jumbotron >
            <h5>Book Search</h5>
            <br/>
            <p>Book:</p>
            <input />
            <Button >
                Search
            </Button>
        </Jumbotron>
     );
}
 
export default Input;