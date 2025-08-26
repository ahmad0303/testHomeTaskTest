const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

// Only start server if this file is run directly
if (require.main === module) {
  app.listen(3000, () => console.log('Server running on port 3000'));
}

module.exports = app;