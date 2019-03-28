const express = require('express');
const bodyParser = require('body-parser');
const sqlite = require('sqlite');

sqlite.open('db.sqlite').then(db => {
  const app = express().use(bodyParser.json());

  app.post('/signin', async (req, res) => {
    const { username, password } = req.body;

    res.send(
      await db.all(
        `SELECT username, confidential_info FROM User WHERE username = '${username}' AND password = '${password}'`
      )
    );
  });

  app.listen(7007, () => {
    console.log('app listening on port 7007');
  });
});
