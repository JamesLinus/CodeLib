import React, {PropTypes} from 'react'

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange() {
		var textBoxValue = this.refs.textbox.value;
		this.props.changeName(textBoxValue);
	}

	render() {
		return (
			<div>
				<input ref="textbox" type="text" onChange={this.handleChange} />
				<h1>{this.props.name}</h1>
			</div>
		);
	}
}

export default Home;
