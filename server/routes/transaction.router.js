const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  pool
    .query(`SELECT * FROM expense;`)
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
router.post('/expense', (req, res) => {
  // POST route code here
  console.log('in router POST', req.body);
  const values = [
    req.body.date,
    req.body.amount,
    req.body.description,
    req.body.user_id,
  ];
  pool
    .query(
      `INSERT INTO expense (date, amount, description, user_id) VALUES ($1, $2, $3, $4);`,
      values
    )
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});
/**
 * DELETE route template
 */
router.delete('/delete', (req, res) => {
  console.log('in router DELETE: ', req.query.id);
  const queryString = `DELETE FROM expense WHERE id=$1;`;
  const values = [req.query.id];
  pool
    .query(queryString, values)
    .then((results) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});
module.exports = router;
