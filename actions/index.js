// Action Creators Go Here
import axios from 'axios';
export const UPDATESEARCH = 'AddressFinder/UPDATESEARCH';
export const RENDERRESULTS = 'Results/RENDERRESULTS';


export const searchIt = (APIsearch, dispatch) => {
  axios.get(`http://maps.googleapis.com/maps/api/geocode/json?address=<${APIsearch}>`)
  .then((response) => {
    console.log(response);
    dispatch(renderResults(response.data.results));
    
  })
  .catch(function (error) {
    console.log(error);
  })

  return({
    type: UPDATESEARCH,
    APIsearch: APIsearch
})
}

export const renderResults = (resultsList) => {
  return ({
    type: RENDERRESULTS,
    resultsList: resultsList
})
}