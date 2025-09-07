import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import employeeRoutes from './routes/employee.routes.js';
import { errorHandler } from './middlewares/errorHandler.js';

const app = express();

// Seguridad y rendimiento
app.use(helmet());
app.use(cors());
app.use('/api', rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));
app.use(express.json());
app.use(morgan('dev'));

// Limitar peticiones solo en rutas específicas
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
});
app.use('/api/employees', limiter);

// Rutas
app.use('/api/employees', employeeRoutes);
app.get('/health', (_req, res) => res.json({ ok: true }));

//Middleware de manejo de errores
app.use(errorHandler);

export default app;