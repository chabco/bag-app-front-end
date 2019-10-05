import React, { Component } from 'react';
import axios from 'axios';
import './Register.css';

class RegisterForm extends Component {
		constructor() {
			super();

			this.state = {
					email: '',
					password: '',
					username: '',
					hasAgreed: false
			};

			this.handleChange = this.handleChange.bind(this);
			this.handleSubmit = this.handleSubmit.bind(this);
		}

		handleChange = (e) => {
			let target = e.target;
			let value = target.type === 'checkbox' ? target.checked : target.value;
			// target.name is the attribute on the html
			let field = target.name;
			// console.log(target.value)

			this.setState({
				[field]: value
			});
		}

		handleSubmit = async (e) => {
			e.preventDefault();

			let validity = true;
			// let msg = '';

			// for (let key in this.state) {
			// 	if ((this.state[key] < 1) && (key !== 'msg')) {
			// 		validity = false;
			// 		msg = `${key} field is required.`
			// 		console.log(msg);
			// 		break;
			// 	}
			// }

			// if (this.state.password.toLowerCase() === this.state.password) {
			// 	validity = false;
			// 	msg = "Your password must contain at least 1 uppercase letter."
			// }
			// else if (!(/\d/.test(this.state.password))) {
			// 	validity = false;
			// 	msg = "Your password must contain at least 1 number"
			// }

			if (validity) {
				const userData = {...this.state}
				console.log(userData);

				const sendUserData = await axios.post(`${window.apiUrl}/users`, {username: this.props.username}, {headers: {'Accept': 'application/json'}})
					.then(response => {
						console.log(response);
					})
					.catch(error => {
						console.log(error)
					})


				console.log(sendUserData);
				// const setUpUrl = `${window.apiUrl}/users`
				// const sendUserData = axios.post(setUpUrl, { userData })
				// .then(res => {
				//   console.log(res);
				//   console.log(res.data);
				// })


			}

			

			console.log('The form was submitted with the following data:');
			console.log(this.state);
		}

		render() {
				return (
				<div className="form-main-container">
					<form onSubmit={this.handleSubmit} className="form-items">
						<div className="form-item">
							<label className="form-item-label" htmlFor="name">Username</label>
							<input type="text" id="name" className="form-item-input" placeholder="Enter your username" name="username" value={this.state.username} onChange={this.handleChange} />
						</div>
						<div className="form-item">
							<label className="form-item-label" htmlFor="password">Password</label>
							<input type="password" id="password" className="form-item-input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
						</div>
						<div className="form-item">
							<label className="form-item-label" htmlFor="email">E-Mail</label>
							<input type="email" id="email" className="form-item-input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
						</div>

						<div className="form-item">
							<label className="form-item-checkbox-label">
							<input className="form-item-checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I accept the<a href="/" className="form-item-tos">TOS</a>
							</label>
						</div>

						<div className="form-item">
							<button className="form-item-button mr-20">Register</button>
						</div>
					</form>
				</div>
				);
		}
}
export default RegisterForm;