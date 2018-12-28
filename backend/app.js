import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import router from './routes/index';

mongoose.connect(
  'mongodb://localhost:27017/test',
  { useNewUrlParser: true }
);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', router);
app.listen(5000, () => {
  console.log('Server is listening on port 3000.');
});
