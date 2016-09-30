import React from 'react';
import { Link } from 'react-router';

const Email = React.createClass({
	handleRemove() {
		const i = this.props.i;
		this.props.removeEmail(i);
	},
    render() {
    	const param = 'list/' + this.props.email.email.replace(/@.*/g,'');
    	return (
    		<li className='email'>
	    		<Link className='link' to={param}>{this.props.email.email}</Link>
		    	<span className="remove" onClick={this.handleRemove}> &times; </span>
	    	</li>					
    	);
    }
});

export default Email;