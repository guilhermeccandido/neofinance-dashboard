import express from 'express';
import cors from 'cors';
import dashboardRoutes from './routes/dashboard.routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/dashboard', dashboardRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'NeoFinance API is running' });
});

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`🔥 Server running on port ${PORT}`);
});