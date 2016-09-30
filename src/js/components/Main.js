import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';

const Main = React.createClass({
    render() {
    	return (
    		<div>
                <div className='main'>
            		<ul className='nav'>
            			<li className='nav-list'><Link className='nav-link' to='/'>List</Link></li>
            			<li className='nav-list'><Link className='nav-link' to='/add-email'>Add email</Link></li>
            		</ul>
                </div>	
    	    	{React.cloneElement(this.props.children, this.props)}
    		</div>		
    	);
    }
});

export default Main;