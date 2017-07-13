
import React, { PropTypes, Component } from 'react'
import ResultsApp from './ResultsApp';

const AddressFinder = ({APIsearch, searchIsSet}) => {
	return (
		<div>
			<form>
  				<label>
    				Search Address:
    			<input type="text" value={APIsearch} onChange={searchIsSet} />
  				</label>
			</form>
			<ResultsApp />
		</div>
	)
	
}


export default AddressFinder;