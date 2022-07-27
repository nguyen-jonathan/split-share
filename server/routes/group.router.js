const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/group', (req, res) => {
  // GET route code here
  pool
    .query(`SELECT * FROM group;`)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post('/group', (req, res) => {
  // POST route code here
  const value = [req.body.name];
  pool
    .query(`INSERT INTO "group" ("name") VALUES ($1);`, value)
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;
