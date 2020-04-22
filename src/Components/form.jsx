import React from 'react';

function Form(props) {
	return (
		<form className='ui input' onSubmit={props.onSubmit}>
			<input
				type='text'
				placeholder='Location'
				onChange={props.onLocation}></input>
			<input className='ui button' type='submit' value='Search'></input>
		</form>
	);
}

export default Form;
