import React from 'react';

function Form(props) {
	return (
		<form onSubmit={props.onSubmit}>
			<input
				type='text'
				placeholder='Location'
				onChange={props.onLocation}></input>
			<input type='submit' value='Search'></input>
		</form>
	);
}

export default Form;
