import React, { Component } from 'react';
import Grid from '../Grid/Grid';

import './Hamburger.css';

class Hamburger extends Component {
    state = { 
        showMenu: false,
        button: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
     }

    burgerBagsShow = (e) => {
        e.preventDefault();
        this.setState({
            showMenu: true,
            button: "http://pluspng.com/img-png/exit-button-png-close-close-button-exit-quit-x-icon-512.png"
        })

        if (this.state.showMenu) {
            this.setState({
                showMenu: false,
                button: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
            })
        }
    }


    render() { 
        return ( 
            <div className="hamburger-container">
                <button className="hamburger" onClick={this.burgerBagsShow}>
                        <img className="hamburger-icon" alt="" src ={this.state.button} />
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