import React from 'react';

class Root extends React.Component {
  render() {
    return (
      <html>
        <head>
          <link href='assets/app.css' rel='stylesheet' />
        </head>
        <body>
          <div id='app' dangerouslySetInnerHTML={{__html: this.props.markup}}></div>
          <script src='assets/app.js'/>
        </body>
      </html>
    );
  }
}

Root.propTypes = {
  markup: React.PropTypes.string
};

export default Root;
