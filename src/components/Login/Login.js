import React, { Component } from 'react';
import axios from 'axios';

class LoginForm extends Component {
		constructor() {
				super();

				this.state = {
					email: '',
					password: '',
					msg: ''
				};

				this.handleChange = this.handleChange.bind(this);
				this.handleSubmit = this.handleSubmit.bind(this);
		}

		handleChange(e) {
			let target = e.target;
			let value = target.type === 'checkbox' ? target.checked : target.value;
			let field = target.name;

			this.setState({
				[field]: value
			});
		}

		handleSubmit(e) {
			e.preventDefault();
			
			console.log('The form was submitted with the following data:');
			console.log({...this.state});

			// ADD VALIDATION (like sign up if(validity) ..etc..) HERE! :)


			axios
			.post(
				`${window.apiUrl}/users/login`, {...this.state})
				.then(response => {
					console.log(response);
				})
				.catch(error => {
					console.log(error)
				})

		}	

		render() {
				return (
				<div className="form-main-container">
						<form onSubmit={this.handleSubmit} className="form-items">
						<div className="form-item">
								<label className="form-item-label" htmlFor="email">E-Mail Address</label>
								<input type="email" id="email" className="form-item-input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
							</div>

							<div className="form-item">
								<label className="form-item-label" htmlFor="password">Password</label>
								<input type="password" id="password" className="form-item-input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
							</div>

							<div className="form-item">
								<button className="form-item-button mr-20">Login</button>	
							</div>
						</form>
					</div>
				);
		}
}

export default LoginForm;