const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from ECS Fargate via GitHub Actions!');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

