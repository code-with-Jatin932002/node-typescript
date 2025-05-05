import express from 'express';
import userRoutes from './routes/user.routes';
import { errorHandler } from './middleware/errorHandler';
import { requestLogger } from './middleware/logger';

import productRoutes from './routes/product.routes';
import authRoutes from './routes/auth.routes';


const app = express();

app.use(express.json());
app.use(requestLogger);
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);

app.use(errorHandler);

export default app;
