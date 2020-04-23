import React from 'react';
import './searchbar.scss';

// Reusable component for a searchbar,
// create the prop "onSubmit" to pass the function you want to activate when submit,
// creathe the prop "onChange" to pass the function to manage the input.
function Searchbar(props) {
	const { onChange, onSubmit } = props;
	return (
		<form className='flexbox' onSubmit={onSubmit}>
			<input
				className='textbox'
				type='search'
				placeholder='Location'
				onChange={onChange}></input>
		</form>
	);
}
export default Searchbar;
