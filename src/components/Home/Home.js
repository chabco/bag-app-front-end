import React, { Component } from 'react';


// INCLUDE ABOUT HERE AND RERENDER TO BAG INFO ON GRID CLICK!

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                
                <h1>Bagay.</h1>
                <h2>Do you love to travel? Do you love organization? Do you want to make your commute easier?</h2>

                <h2>Your bag matters.</h2>
                <hr/>
                <p>Everyone carries differently. Bagay is full-stack web-application that provides a user-friendly interface displays relevant information of each bag in the custom-made database.</p>

                <p>What is "Bagay"?</p>
                <p>"Bagay" is a Tagalog (Filipino) word that is used to describe how proper or suitable something is to a time, place, situation, you name it. Here at BAGay, we help you find the right (or...BAGAY) portable home for the things you carry to work, the gym, or the airport.</p>

                <p>Thank you for using Bagay as it continues to expand in its collection of everyday carry and travel backpacks.</p>
                <hr/>
                <p>Developer wishlist:</p>
                <p>Sort functionality</p>
                <p>Search functionality</p>
                <p>Expand database</p>
                <p>User feedback</p>
                
            </div>

        );
    }
}
 
export default Home;