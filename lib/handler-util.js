'use strict';
const fs = require('node:fs');

function handleFavicon(req, res) {
  res.writeHead(200, {
    'Content-Type': 'image/vnd.microsoft.icon',
    'Cache-Control': 'public, max-age=604800'
  });
  const favicon = fs.readFileSync('./public/favicon.ico');
  res.end(favicon);
}

function handleStyleCssFile(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/css'
  });
  const file = fs.readFileSync('./public/style.css');
  res.end(file);
}

function handleNnChatJsFile(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/javascript'
  });
  const file = fs.readFileSync('./public/nn-chat.js');
  res.end(file);
}

function handleTopPage(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  res.write('<!DOCTYPE html><html lang="ja"><head><meta charset="utf-8"><title>StudyLog 入口</title>');
  res.write('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"></head>');
  res.write('<body class="container py-5 text-center">');
  res.write('<h1 class="mb-3">StudyLog（一行学習ログボード）</h1>');
  res.write('<p class="lead text-muted mb-4">日々の小さな進捗を一行で記録し、学習ペースを可視化するログボードです。</p>');
  res.write('<p><a href="/posts" class="btn btn-primary btn-lg">ログボードを開く</a></p>');
  res.write('<p class="mt-4"><a href="/logout" class="text-secondary">ログアウト</a></p>');
  res.write('</body></html>');
  res.end();
}

function handleNotFound(req, res) {
  res.writeHead(404, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  res.write('<p>ページがみつかりません</p>');
  res.write('<p><a href="/posts">StudyLogへ戻る</a></p>');
  res.end();
}

function handleBadRequest(req, res) {
  res.writeHead(400, {
    'Content-Type': 'text/plain; charset=utf-8'
  });
  res.end('未対応のリクエストです');
}

module.exports = {
  handleFavicon,
  handleStyleCssFile,
  handleNnChatJsFile,
  handleTopPage,
  handleNotFound,
  handleBadRequest
};