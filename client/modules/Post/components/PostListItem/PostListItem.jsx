import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import CommentsToolsPage from '../../../Comment/pages/CommentsToolsPage/CommentsToolsPage';
// Import Style
import styles from './PostListItem.css';

class PostListItem extends React.Component {
  state = { showCreateComment: false }
  showCreateCommentHandler = () => {
    this.setState(state => ({ showCreateComment: !state.showCreateComment }));
  }
  render() {
    const { showCreateComment } = this.state;
    return (
      <div className={styles['single-post']}>
        <h3 className={styles['post-title']}>
          <Link to={`/posts/${this.props.post.slug}-${this.props.post.cuid}`} >
            {this.props.post.title}
          </Link>
        </h3>
        <p className={styles['author-name']}><FormattedMessage id="by" /> {this.props.post.name}</p>
        <p className={styles['post-desc']}>{this.props.post.content}</p>
        <p className={styles['post-action']}><a href="#" onClick={this.props.onDelete}><FormattedMessage id="deletePost" /></a></p>
        <p className={styles['post-action']}><a href="#" onClick={this.showCreateCommentHandler}><FormattedMessage id="createNewComment" /></a></p>
        <CommentsToolsPage cuidPost={this.props.post.cuid} showCreateCommentHandler={this.showCreateCommentHandler} showCreateComment={showCreateComment} />
        <hr className={styles.divider} />
      </div>
    );
  }
}

PostListItem.propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default PostListItem;
