import React, { Component } from 'react';
import Grid from '../Grid/Grid';

import './Hamburger.css';

class Hamburger extends Component {
    state = { 
        showMenu: false
     }

    burgerBagsShow = (e) => {
        e.preventDefault();
        this.setState({
            showMenu: true
        })

        if (this.state.showMenu) {
            this.setState({
                showMenu: false
            })
        }
    }


    render() { 
        return ( 
            <div className="hamburger-container">
                <button className="hamburger" onClick={this.burgerBagsShow}>
                    <span className="hamburger-text">+</span>
                </button>
                {
                    this.state.showMenu
                    ? (
                        <div className="menu" onClick={this.burgerBagsShow}>
                           <Grid/>
                        </div>
                    )
                    : (null)
                    }
            </div>
         );
    }
}
 
export default Hamburger;