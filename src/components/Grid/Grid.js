import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import './Grid.css';

class Grid extends Component {
    state = { bags: [] }

    componentDidMount = () => {
        const allBags = axios.get(`${window.apiUrl}/bags`)
		allBags.then((resp) => {
			const bags = resp.data;
			console.log(bags);
			this.setState({
				bags
			})
		})
    }


    render() { 
        return ( 
            <div className="row">
                <NavLink to="/home" className="about bags col s12 m6 l3">
                    <div className="bags-content">Hello!</div>
                </NavLink>
                {this.state.bags.map(aBag =>
                    <NavLink to="/home" key={aBag.id} className="bags col s12 m6 l3">
                        <div>{aBag.name}</div>
                    </NavLink>
                )}


            </div>
        );
    }
}
 
export default Grid;