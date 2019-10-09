import React, { Component } from 'react';
import { Link } from 'react-router-dom';


// INCLUDE ABOUT HERE AND RERENDER TO BAG INFO ON GRID CLICK!

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Link to="">
                    <h1>HomePage! You are logged in!</h1>
                </Link>
            </div>

        );
    }
}
 
export default Home;