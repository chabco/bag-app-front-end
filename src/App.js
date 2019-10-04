import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [] }
  }

componentDidMount() {
  fetch('/users')
  .then(res => res.json())
  .then(users => this.setState({ users }))
}


  render() { 
    return ( 
      <div className="App">
        <h1>Users</h1>
        <ul>
          {this.state.users.map(aUser => <li key={aUser.id}>{aUser.first}</li>)}
        </ul>
      </div>
     );
  }
}
 
export default App;