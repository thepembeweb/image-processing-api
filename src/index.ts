import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import dotenv from 'dotenv';

import router from './routes/index';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app: Express = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', router);

app.get('/api', (req: Request, res: Response) => {
  res.send('<h1>Image Processing Api</h1>');
});

app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));

export default app;
