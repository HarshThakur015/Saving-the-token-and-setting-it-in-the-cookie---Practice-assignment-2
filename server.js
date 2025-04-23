const express = require('express');
const cors = require('cors');
const path = require('path');
const { encrypt, decrypt } = require('./script');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname)); 

app.post('/encrypt', (req, res) => {
  const payload = req.body;
  const token = encrypt(payload);
  res.json({ token });
});

app.post('/decrypt', (req, res) => {
  const { token } = req.body;
  const decrypted = decrypt(token);
  res.json({ decrypted });
});

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/page2', (req, res) => res.sendFile(path.join(__dirname, 'page2.html')));

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
