import React from 'react';
import './App.css';
import Home from './components/Home/Home';

class App extends React.Component {

	render() { 
		return ( 

			<div className="app">
				<Home />
			</div>
			// <div className="App">
			//   <h1>Users</h1>
			//   <ul>
			//     {this.state.users.map(aUser => <li key={aUser.id}>{aUser.first}</li>)}
			//   </ul>
			// </div>
		 );
	}
}
 
export default App;