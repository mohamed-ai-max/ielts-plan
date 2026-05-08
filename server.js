const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const DATA_FILE = path.join(__dirname, 'data.json');

app.use(cors());
app.use(express.json());

const loadData = () => {
  if (!fs.existsSync(DATA_FILE)) {
    return {};
  }
  try {
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading data file:', err);
    return {};
  }
};

const saveData = (data) => {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
  } catch (err) {
    console.error('Error writing to data file:', err);
  }
};

app.get('/api/data', (req, res) => {
  const data = loadData();
  res.json(data);
});

app.post('/api/save', (req, res) => {
  const { key, value } = req.body;
  
  if (key === undefined || value === undefined) {
    return res.status(400).json({ error: 'Missing key or value' });
  }

  const data = loadData();
  data[key] = value;
  saveData(data);

  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});