import express from 'express';
import { routes } from './routes';

const app = express();

app.use(express.json());
app.use(routes);

// RODA O SERVIDOR
try {
  app.listen(3333, () => {
    console.log('HTTP server running');
  });
} catch (error) {
  console.log(error);
}