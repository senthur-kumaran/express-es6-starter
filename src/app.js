import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import sampleRoutes from './routes/sample.route';

dotenv.config();
const app = express();
const port = 3000;

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use(sampleRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

process.on('uncaughtException', (error) => {
  console.error(`Uncaught exception, ${error.stack}`);
  console.error('Terminating process');
  process.exit(1);
});

process.on('unhandledRejection', (error) => {
  console.error(`Unhandled rejection, ${error.stack}`);
  console.error('Terminating process');
  process.exit(1);
});
