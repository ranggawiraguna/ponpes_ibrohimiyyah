import * as actionTypes from '../action';

export const initialState = {
  imageBackdrop: '',
  isOpenImageBackdrop: false
};

const landingReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_IMAGE_BACKDROP:
      return {
        ...state,
        isOpenImageBackdrop: action.status,
        imageBackdrop: action.image
      };

    default:
      return state;
  }
};

export default landingReducer;
