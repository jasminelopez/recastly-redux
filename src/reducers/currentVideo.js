import Redux from 'redux';

//action that is being passed in is the action creator
// var changeVideo = (video) => ({
//   type: 'CHANGE_VIDEO',
//   video: video
// });

// App.js state
// this.state = {
//   videos: [],
//   currentVideo: null
// };


var currentVideoReducer = (state = null, action) => {
  if (action.type === 'CHANGE_VIDEO') {
    var newState = action.video;

    return newState;
  }
  return state;
};

export default currentVideoReducer;
