import React from 'react';
import Searchbar from './searchbar/Searchbar';

function Form(props) {
	return <Searchbar onSubmit={props.onSubmit} onChange={props.onChange} />;
}

export default Form;
