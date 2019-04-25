import Redux from 'redux';

var videoListReducer = (state = [], action) => {
  if (action.type === 'CHANGE_VIDEO_LIST') {
    var newState = [];
    newState = action.videos.splice(0);
    return newState;
  }

  return state;
};

export default videoListReducer;
