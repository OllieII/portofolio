const http = require('http');
const fs = require('fs');
const path = require('path');

const port = Number(process.env.PORT || 3000);
const buildDir = path.join(__dirname, 'build');
const basePath = '/portofolio';

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf',
  '.mp4': 'video/mp4'
};

function sendFile(res, filePath) {
  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Not found');
      return;
    }

    res.writeHead(200, {
      'Content-Type': mimeTypes[path.extname(filePath).toLowerCase()] || 'application/octet-stream'
    });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  const rawPath = decodeURIComponent((req.url || '/').split('?')[0]);
  const relativePath = rawPath.startsWith(basePath)
    ? rawPath.slice(basePath.length) || '/'
    : rawPath;
  const requestedPath = path.normalize(relativePath).replace(/^(\.\.[/\\])+/, '');
  const filePath = path.join(buildDir, requestedPath === '/' ? 'index.html' : requestedPath);

  fs.stat(filePath, (error, stats) => {
    if (!error && stats.isFile()) {
      sendFile(res, filePath);
      return;
    }

    sendFile(res, path.join(buildDir, 'index.html'));
  });
});

server.listen(port, '127.0.0.1', () => {
  console.log(`Portfolio running at http://localhost:${port}${basePath}`);
});
