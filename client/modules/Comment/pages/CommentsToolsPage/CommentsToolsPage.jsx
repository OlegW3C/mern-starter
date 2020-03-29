import React from 'react';
import PropTypes from 'prop-types';
import { CommentsContext } from '../../../../context/commentsContext';
import CommentCreateWidget from '../../components/CommentCreateWidget/CommentCreateWidget';
import CommentListItem from '../../components/CommentListItem/CommentListItem';

function CommentsToolsPage(props) {
  return (
    <CommentsContext.Consumer>
      {({ comments, addCommentHandler, editCommentHandler, deleteCommentHandler }) => {
        const ArrayOfComments = Object.values(comments).filter(comment => comment.cuidPost === props.cuidPost);
        return (
          <div>
            <CommentCreateWidget
              cuidPost={props.cuidPost}
              showCreateComment={props.showCreateComment}
              addCommentHandler={addCommentHandler}
              showCreateCommentHandler={props.showCreateCommentHandler}
            />
            {ArrayOfComments.map(comment => (
              <CommentListItem
                key={comment.id}
                comment={comment}
                editCommentHandler={editCommentHandler}
                deleteCommentHandler={deleteCommentHandler}
              />
            ))}
          </div>
        );
      }}
    </CommentsContext.Consumer>
  );
}

CommentsToolsPage.propTypes = {
  cuidPost: PropTypes.string.isRequired,
  showCreateComment: PropTypes.bool.isRequired,
  showCreateCommentHandler: PropTypes.func.isRequired,
};

export default CommentsToolsPage;
