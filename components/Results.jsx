import React, { PropTypes, Component } from 'react'


const Results = (resultsList) => {
	return (
	
		<ul>
			Results
			{resultsList.resultsList.map(result => <li>{result.formatted_address}</li>)}
		</ul>
		// resultsList.forEach(createListItem)
	)
}

export default Results;