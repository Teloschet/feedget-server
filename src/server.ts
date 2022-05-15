import express from 'express';
import { prisma } from './prisma';

const app = express();

app.use(express.json());

// ROTAS
app.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot,
    }
  })

  return res.status(201).json({ data: feedback });
})

// RODA O SERVIDOR
try {
  app.listen(3333, () => {
    console.log('HTTP server running');
  });
} catch (error) {
  console.log(error);
}