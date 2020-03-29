import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

// Import Style
import styles from './CommentCreateWidget.css';

class CommentCreateWidget extends Component {

  clickHandler = () => {
    const nameRef = this.refs.name;
    const contentRef = this.refs.content;
    if (nameRef.value && contentRef.value) {
      const id = String(Date.now());
      const comment = { name: nameRef.value, content: contentRef.value, id, cuidPost: this.props.cuidPost };
      this.props.addCommentHandler(comment);
      this.props.showCreateCommentHandler();
      nameRef.value = contentRef.value = '';
    }
  };

  render() {
    const cls = `${styles.form} ${(this.props.showCreateComment ? styles.appear : '')}`;
    return (
      <div className={cls}>
        <div className={styles['form-content']}>
          <h2 className={styles['form-title']}><FormattedMessage id="createNewComment" /></h2>
          <input placeholder={this.props.intl.messages.authorName} className={styles['form-field']} ref="name" />
          <textarea placeholder={this.props.intl.messages.commentContent} className={styles['form-field']} ref="content" />
          <a className={styles['post-submit-button']} href="#" onClick={this.clickHandler}><FormattedMessage id="submit" /></a>
        </div>
      </div>
    );
  }
}

CommentCreateWidget.propTypes = {
  intl: intlShape.isRequired,
  addCommentHandler: PropTypes.func.isRequired,
  cuidPost: PropTypes.string.isRequired,
  showCreateComment: PropTypes.bool.isRequired,
  showCreateCommentHandler: PropTypes.func.isRequired,
};

export default injectIntl(CommentCreateWidget);
