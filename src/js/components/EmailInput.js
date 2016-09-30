import React from 'react';

const EmailInput = React.createClass({
	handleAdd(e) {
		e.preventDefault();
		const name = this.refs.name.value;
		const email = this.refs.email.value;
		if(/^\w+$/.test(name) && /^[\w\-\.]+@[a-z]+\.[a-z]{2,}$/.test(email)) {
			this.props.addEmail(name, email);
			this.refs.form.reset();
		} else {
			alert("Incorrect input");
		};		
	},
    render() {
    	return (
    		<form ref="form" className="input-form" onSubmit={this.handleAdd} >
		    	<input className="input-name" type="text" ref="name" placeholder="Enter your name" />
		    	<input className="input-email" type="text" ref="email" placeholder="Enter your email" />
		        <input className="add-button" type="submit" value='Add' />
	    	</form>					
    	);
    }
});

export default EmailInput;