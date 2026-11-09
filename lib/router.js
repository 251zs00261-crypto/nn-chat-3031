'use strict';
const postsHandler = require('./posts-handler');
const themeHandler = require('./theme-handler');
const logoutHandler = require('./logout-handler');
const util = require('./handler-util');

function route(req, res) {
  if (process.env.NODE_ENV === 'production' && req.headers['x-forwarded-proto'] === 'http') {
    util.handleNotFound(req, res);
    return;
  }
  switch (req.url) {
    case '/posts':
      postsHandler.handle(req, res);
      break;
    case '/posts/delete':
      postsHandler.handleDelete(req, res);
      break;
    case '/change-theme':
      themeHandler.handle(req, res);
      break;
    case '/logout':
      logoutHandler.handle(req, res);
      break;
    case '/favicon.ico':
      util.handleFavicon(req, res);
      break;
    case '/style.css':
      util.handleStyleCssFile(req, res);
      break;
    case '/nn-chat.js':
      util.handleNnChatJsFile(req, res);
      break;
    case '/':
      util.handleTopPage(req, res);
      break;
    default:
      util.handleNotFound(req, res);
      break;
  }
}

module.exports = {
  route
};