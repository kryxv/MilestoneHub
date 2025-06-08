const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Your other app setup code here (middleware, routes, etc.)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

