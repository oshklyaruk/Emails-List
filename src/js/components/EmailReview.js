import React from 'react';

const EmailReview = React.createClass({
    render() {
        const i = this.props.emails.findIndex((email) => 
            email.email.indexOf(this.props.params.emailReview) !== -1);
    	return (
            <ul className='email-review'>
                <li>Name: {this.props.emails[i].name}</li>
                <li>Email: {this.props.emails[i].email}</li>
            </ul>					
    	);
    }
});

export default EmailReview;