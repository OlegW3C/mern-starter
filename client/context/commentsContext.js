import { createContext } from 'react';

function noop() {}

export const CommentsContext = createContext({
  comments: null,
  addCommentHandler: noop,
  editCommentHandler: noop,
  deleteCommentHandler: noop,
});
