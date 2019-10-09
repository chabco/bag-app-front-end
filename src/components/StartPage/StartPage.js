import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import RegisterForm from '../Register/Register';
import LoginForm from '../Login/Login';
import Home from '../Home/Home';
import Grid from '../Grid/Grid';
import axios from 'axios';

import './StartPage.css';

class App extends Component {
	state = {
		users: [],
		bags: [],
		msg: ""
	}

	componentDidMount = () => {
		const allUsers = axios.get(`${window.apiUrl}/users`)
		allUsers.then((resp) => {
			const users = resp.data;
			console.log(users);
			this.setState({
				users
			})
		})
	}

	buildToggle = () => {
		let toggleItems = "";
		if (!this.props.token) {
			toggleItems =
				<div className="toggle">
					<NavLink exact to="/" activeClassName="toggle-item-active" className="toggle-item">Login</NavLink>
					<NavLink to="/register" activeClassName="toggle-item-active" className="toggle-item">Register</NavLink>
				</div>
		}
		else {
			toggleItems =
				<div className="toggle">
					<NavLink to="/home" activeClassName="toggle-item-active" className="toggle-item">Home</NavLink>
				</div>
		}
		return toggleItems;
	}


	render() {
		const toggleItems = this.buildToggle();
	return (
		<Router>
		<div className="app-left">

		{/* <ul>
			{this.state.users.map(aUser => <li key={aUser.id}>{aUser.username}</li>)}
		</ul> */}
			<Grid />



		</div>

		<div className="app-right">
			{toggleItems}
			<Route exact path="/" render={(props)=> {
				return <LoginForm history={props.history}/>
			}}/>
			<Route path="/register" component={RegisterForm}/>
			<Route exact path="/home" component={Home}/>
			<Route path="/bags" component={Grid}/>
		</div>
		</Router>
	);
	}
}

export default App;