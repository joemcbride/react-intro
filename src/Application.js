import React from 'react';

import PostList from './PostList';

let posts = [
  {title: 'Vegas', text:'Things about vegas.'},
  {title: 'JavaScript', text:'Things about JavaScript.'}
];

class Application extends React.Component {
  render() {
    return (
      <div>
        <h1>React Intro</h1>
        <PostList posts={posts}/>
      </div>
    );
  }
}

export default Application;
