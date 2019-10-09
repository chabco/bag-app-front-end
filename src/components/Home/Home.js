import React, { Component } from 'react';
import { Link } from 'react-router-dom';


// INCLUDE ABOUT HERE AND RERENDER TO BAG INFO ON GRID CLICK!

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Link to="">
                    <h1>Bagay.</h1>
                    <p>Do you love to travel? Do you love organization? Do you want to make your commute easier?

                        Your bag matters.
                    </p>
                </Link>
            </div>

        );
    }
}
 
export default Home;