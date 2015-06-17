import React from 'react';

class Post extends React.Component {
  render() {
    return (
      <div>
      </div>
    );
  }
}

Post.propTypes = {
  title: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired
};

export default Post;
