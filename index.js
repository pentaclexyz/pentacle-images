const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');


dotenv.config();


(async () => {
  const server = express();
  server.use(express.json());
  
  server.use(cors());
  server.use('/static', express.static('images'));

  server.listen(PORT, async (err) => {
    console.log(`> Ready on localhost:${PORT} - env ${process.env.NODE_ENV}`);
  });
})();
