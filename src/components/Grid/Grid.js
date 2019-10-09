import React, { Component } from 'react';
import axios from 'axios';

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
            <div>
                {this.state.bags.map(aBag =>
                <div key={aBag.id} className="row">
                <div className="col s12 m6 l3">{aBag.name}</div>
                </div>
            )}
            </div>
         );
    }
}
 
export default Grid;