import express from 'express';
import Cat from '../models/Cat';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ some: 'JSON' });
});

router.get('/cats', (req, res) => {
  Cat.find({}, (err, cats) => {
    if (err) throw err;

    res.json(cats);
  });
});

export default router;
