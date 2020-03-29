/* eslint-disable no-param-reassign */
import { ADD_COMMENT, DELETE_COMMENT, EDIT_COMMENT } from './CommentActions';

// Initial State
const initialState = { data: {} };

const CommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        data: { ...state.data, ...{ [action.payload.comment.id]: action.payload.comment } },
      };

    case EDIT_COMMENT:
      return {
        data: { ...state.data, ...{ [action.payload.id]: { ...state.data[action.payload.id], content: action.payload.content } } },
      };
    case DELETE_COMMENT:
      delete state.data[action.payload.id];
      return {
        data: { ...state.data },
      };
    default:
      return state;
  }
};


/* Selectors */

// Get all comments
export const getComments = state => state.comments.data;

// Export Reducer
export default CommentReducer;
