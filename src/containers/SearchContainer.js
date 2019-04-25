import { connect } from 'react-redux';
import Search from './../components/Search.js'; //component
import handleSearchChange from '../actions/search.js'; //action creator


const mapDispatchToProps = dispatch => {
  return {
    getYouTubeVideos: q => {
      dispatch(handleSearchChange(q))
    }
  }
}


var SearchContainer = connect(mapDispatchToProps)(Search);

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default SearchContainer;