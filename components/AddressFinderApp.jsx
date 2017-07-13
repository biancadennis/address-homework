import { connect } from 'react-redux'
import { UPDATESEARCH, searchIt,SEARCHISSET, RENDERRESULTS } from '../actions'
import AddressFinder from './AddressFinder'

export default connect(
	(state)    => ({APIsearch: state.APIsearch}),
	(dispatch) => ({
		searchIsSet:       (event) => {
			dispatch(searchIt(event.target.value, dispatch))
		}
	})
)(AddressFinder)