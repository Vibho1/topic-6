const express = require('express');
const app = express();

const port = 3000;
const base = `${__dirname}/public`;

app.use(express.static('public'));

app.get('/', function (req, res)  {
  res.sendFile(`${base}/iot-data.html`);
});



app.get('/register-device', function (req, res) {
  res.sendFile(`${base}/register-device.html`);
});

app.get('*', function (req, res)  {
  res.sendFile(`${base}/404.html`);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

