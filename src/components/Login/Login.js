import React, { Component } from 'react';

class LoginForm extends Component {
		constructor() {
				super();

				this.state = {
					email: '',
					password: '',
					redirect: false
				};

				this.handleChange = this.handleChange.bind(this);
				// this.setRedirect= this.setRedirect.bind(this);
				// this.renderRedirect = this.renderRedirect.bind(this);
		}

		handleChange(e) {
			let target = e.target;
			let value = target.type === 'checkbox' ? target.checked : target.value;
			let field = target.name;

			this.setState({
				[field]: value
			});
		}



		render() {
			// console.log(this.props.history)
				return (
				<div className="form-main-container">
						<form onSubmit={(e, data) => this.props.handleSubmit(e, {...this.state})} className="form-items">
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