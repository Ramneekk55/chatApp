import React from 'react';
import ReactDOM from 'react-dom';

import Todo from "./todo/index.js"


class Cq extends React.Component 
{
	render() {
		return (
            <>
			    <Todo/>
			    
            </>
		)
	}
}

ReactDOM.render(
	<Cq />,
	document.getElementById('root')
);
