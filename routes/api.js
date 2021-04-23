const router = require("express").Router();
const Transaction = require("../models/transaction.js");

router.post(`/api/transaction`, ({ body }, res) => {
  Transaction.create(body)
    .then((dbTransaction) => res.json(dbTransaction))
    .catch((err) => res.status(400).json(err));
});

router.post(`/api/transaction/bulk`, ({ body }, res) => {
  Transaction.insertMany(body)
    .then((dbTransaction) => res.json(dbTransaction))
    .catch((err) => res.status(400).json(err));
});

router.get(`/api/transaction`, (req, res) => {
  Transaction.find({})
    .sort({ date: -1 })
    .then((dbTransaction) => res.json(dbTransaction))
    .catch((err) => res.status(400).json(err));
});

//delete
router.delete("/api/transaction", (req, res) => {
  Transaction.remove({})
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

module.exports = router;
