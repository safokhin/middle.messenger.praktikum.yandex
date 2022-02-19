const express = require('express');
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./dist'));

app.listen(PORT, () => {
  console.log(`Application was started on port: ${PORT}`);
});
