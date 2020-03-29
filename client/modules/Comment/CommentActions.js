// Export Constants

export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';

// Export Actions
export function addComment(comment, id) {
  return {
    type: ADD_COMMENT,
    payload: { comment, id },
  };
}

export function deleteComment(id) {
  return {
    type: DELETE_COMMENT,
    payload: { id },
  };
}

export function editComment(id, content) {
  return {
    type: EDIT_COMMENT,
    payload: { id, content },
  };
}
