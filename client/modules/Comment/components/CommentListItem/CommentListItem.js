import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './CommentListItem.css';

class CommentListItem extends React.Component {

  clickEditHandler = () => {
    const { comment, editCommentHandler } = this.props;
    const editRef = this.refs.edit;
    if (editRef.value) {
      editCommentHandler(comment.id, editRef.value);
    }
  };

  clickDeleteHandler = () => this.props.deleteCommentHandler(this.props.comment.id)

  render() {
    const { comment } = this.props;
    return (
      <div>
        <p className={styles['author-name']}>{comment.name}</p>
        <p className={styles['comment-desc']}>{comment.content}</p>
        <p className={styles['comment-action']}><a href="#" onClick={this.clickDeleteHandler}><FormattedMessage id="deleteComment" /></a></p>
        <h2 className={styles['form-title']}><FormattedMessage id="editComment" /></h2>
        <input placeholder="edit comment" className={styles['form-field']} defaultValue={comment.content} ref="edit" />
        <p className={styles['comment-action']}><a href="#" onClick={this.clickEditHandler}><FormattedMessage id="editComment" /></a></p>
      </div>
    );
  }
}

CommentListItem.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  editCommentHandler: PropTypes.func.isRequired,
  deleteCommentHandler: PropTypes.func.isRequired,
};

export default CommentListItem;
