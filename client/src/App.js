import React, { Component } from 'react';
import './app.scss';

class App extends Component {
	state = {
		users: []
	};

	// componentDidMount = () => {
	// 	fetch('/users')
	// 		.then(res => res.json())
	// 		.then(users =>
	// 			this.setState({ users }, () => console.log('users fetched', users))
	// 		);
	// };

	async componentDidMount() {
		const res = await fetch('/users');
		const users = await res.json();
		this.setState({ users }, () => console.log('users fetched -->', users));
	}

	render() {
		const users = this.state.users;
		return (
			<div className="container">
				<div className="item-wrap">
					<h1>List of Users!</h1>
					<hr />
					{users.map(user => (
						<div className="item" key={user.id}>
							{user.firstname} {user.lastname}
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default App;
