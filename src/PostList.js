import React from 'react';

class PostList extends React.Component {
  render() {
    return (
      <ul>
        Post List
      </ul>
    );
  }
}

PostList.propTypes = {
  posts: React.PropTypes.array.isRequired
};

export default PostList;
