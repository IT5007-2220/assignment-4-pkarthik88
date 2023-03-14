const fs = require('fs');
const express = require('express');


const app = express();
app.use(express.static('public'));


( function () {
  try {
    app.listen(3000, function () {
      console.log('App started on port 3000');
    });
  } catch (err) {
    console.log('ERROR:', err);
  }
})();
