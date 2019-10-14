import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import './Grid.css';

class Grid extends Component {
    constructor(props) {
        super();
        this.state = { bags: [] }
    }

    componentDidMount = () => {
        const allBags = axios.get(`${window.apiUrl}/bags/`)
		allBags.then((resp) => {
			const bags = resp.data;
			console.log(bags);
			this.setState({
				bags
			})
		})
    }

    render() { 
        const allBags = this.state.bags.map((bag, i) => 
        <div className="hover col s12 m5 l3">
            <NavLink exact to={`/review/${bag.id}`} key={i} className="bags" style={{
                backgroundImage: `url(${bag.image})`,
                backgroundPosition: 'center',
                // backgroundSize: 'cover',
                }}>
                <div className="bags-content">
                    <div className="bags-name">{bag.name}<div>{bag.volume_l}L</div></div>
                </div>
            </NavLink>
            </div>
        )
        
        console.log(this)
        return ( 
            <div className="row">
                <NavLink exact to="/home" className="about bags col s12 m6 l3">
                    <div className="bags-content"><div className="home-name">Welcome.</div></div>
                </NavLink>
                {allBags}
            </div>
        );
    }
}
 
export default Grid;