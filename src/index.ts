import express from 'express';
import dotenv from 'dotenv';
import routes from './routes/index';
import morgan from 'morgan';
import cors from 'cors';
dotenv.config();

const { API_PORT } = process.env;
const app = express();
app.use(cors());
app.use(
  morgan((tokens, req, res) => {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'),
      '-',
      tokens['response-time'](req, res),
      'ms',
    ].join(' ');
  })
);

app.use(express.json());
app.use(routes);
app.listen(process.env.PORT || 3000, () => {
  console.log(`Api up and running on port ${process.env.PORT}`);
});