import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import RegisterForm from '../Register/Register';
import LoginForm from '../Login/Login';
import axios from 'axios';

import './Home.css';

class App extends Component {
	state = {
		users: []
	}

componentDidMount() {
	const allUsers = axios.get(`${window.apiUrl}/users`)
	allUsers.then((resp) => {
		const users = resp.data;
		console.log(users);
		this.setState({
			users
		})
	})
}


  render() {
	return (
	  <Router >
		<div className="app-left">

		<ul>
			{this.state.users.map(aUser => <li key={aUser.id}>{aUser.username}</li>)}
		</ul>

		</div>

		<div className="app-right">
			<div className="toggle">
				<NavLink exact to="/" activeClassName="toggle-item-active" className="toggle-item">Login</NavLink>
				<NavLink to="/register" activeClassName="toggle-item-active" className="toggle-item">Register</NavLink>
			</div>

			<Route exact path="/" component={LoginForm}>
			</Route>
			<Route path="/register" component={RegisterForm}>
			</Route>
		</div>
	  </Router>
	);
  }
}

export default App;