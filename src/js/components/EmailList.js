import React from 'react';
import Email from './Email';

const EmailList = React.createClass({
    render() {
    	return (
    		<ul className='email-list'>
    			{this.props.emails.map((email, i) => 
    			<Email {...this.props} key={i} i={i} email={((email, i) => 
    			{email.i = i; return email;})(email,i)} />)}
    		</ul> 					
    	);
    }
});

export default EmailList;
