// node server.js 입력하면 실행
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// app.get('/api/page1', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'page1.html'));
//   });

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'page1.html'));
});

app.get('/api/page2', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'page2.html'));
});

app.get('/api/page3', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'page3.html'));
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 포트에서 시작됩니다.`);
});
