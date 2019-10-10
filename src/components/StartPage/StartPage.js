import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink, Redirect } from 'react-router-dom';
import RegisterForm from '../Register/Register';
import LoginForm from '../Login/Login';
import Home from '../Home/Home';
import Grid from '../Grid/Grid';
import Review from '../ReviewPage/ReviewPage';
import axios from 'axios';

import './StartPage.css';

class App extends Component {
	constructor(props) {
		super();
		this.state = {
			users: [],
			bags: [],
			msg: "",
			data: [],
			loggedIn: false
		}
		this.handleSubmit = this.handleSubmit.bind(this);
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

	logout = (e) => {
		this.setState({
			loggedIn: false
		})
	}

	handleSubmit(e, data) {
		e.preventDefault();
		
		console.log('The form was submitted with the following data:');
		console.log(data);

		// ADD VALIDATION (like sign up if(validity) TOS must be checked ..etc..) HERE! :)

	
		axios
		.post(
			`${window.apiUrl}/users/login`, data)
			.then((response) => {
				console.log('response');
				console.log(response.data);
				// localStorage.setItem('data', response.data);
				this.setState({
					loggedIn: true
				})
			})
			.catch(error => {
				console.log(error)
			})
	}

	buildToggle = () => {
		let toggleItems = "";
		if (this.state.loggedIn === false) {
			toggleItems =
				<div className="toggle">
					<NavLink exact to="/" activeClassName="toggle-item-active" className="toggle-item">Login</NavLink>
					<NavLink to="/register" activeClassName="toggle-item-active" className="toggle-item">Register</NavLink>
				</div>
		}
		else if (this.state.loggedIn === true) {
			console.log('came through here');
			toggleItems =
				<div className="toggle">
					<NavLink to="/home" activeClassName="toggle-item-active" className="toggle-item">Home</NavLink>
					<NavLink to="/" activeClassName="toggle-item-active" className="toggle-item"><div onClick={() => this.logout()} >Logout</div></NavLink>
				</div>
		}
		return toggleItems;
	}

	render() {
		console.log('hi');
		console.log(this.state.loggedIn);
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
				<Route exact path="/">
					{this.state.loggedIn ? <Redirect to="/home" /> : <LoginForm handleSubmit={this.handleSubmit} history={this.props.history} />}
				</Route>
				<Route path="/register" component={RegisterForm}/>
				<Route exact path="/home" component={Home}/>
				<Route path="/bags" component={Grid}/>
				{/* <Route path="/review" component={Review}/> */}
				<Route exact path = "/review/:bagId" component = { Review } />
			</div>
			</Router>
		);
	}
}

export default App;