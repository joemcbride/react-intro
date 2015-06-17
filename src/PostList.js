import React from 'react';

import Post from './Post';

class PostList extends React.Component {
  render() {
    let posts = this.props.posts.map((post,index)=>{
      return (
        <li key={index}><Post title={post.title} text={post.text}/></li>
      );
    });
    return (
      <ul>
        {posts}
      </ul>
    );
  }
}

PostList.propTypes = {
  posts: React.PropTypes.array.isRequired
};

export default PostList;
