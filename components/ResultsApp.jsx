import { connect } from 'react-redux'
import {RENDERRESULTS } from '../actions'
import Results from './Results'

export default connect(
	(state)    => ({resultsList: state.resultsList}),
	(dispatch) => ({
		// renderResults: () => dispatch({type: RENDERRESULTS})
	})
)(Results)