import express from 'express';
import path from 'path';

import React from 'react';
import Application from './Application';
import Root from './Root';

const port = process.env.PORT || 4000;

const staticDir = '../dist';

const rootFactory = React.createFactory(Root);

let app = express();

app.use(express.static(path.join(__dirname, staticDir)));

app.use(function renderApp(req, res) {
  if (req.url === '/') {
    let markup = React.renderToString(<Application/>);
    let html = React.renderToStaticMarkup(rootFactory({
      markup: markup
    }));
    res.send(html);
  }
});

app.listen(port, function () {
  console.log(`Server started at http://localhost:${port}`);
});
