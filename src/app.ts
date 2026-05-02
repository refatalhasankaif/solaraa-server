import express, { Application, Request, Response } from 'express';
import status from 'http-status';
import { globalErrorHandler } from './app/middleware/globalErrorHandler';
import { notFound } from './app/middleware/notFound';
import { IndexRoutes } from './app/routes';
// import cors from 'cors';
// import { envVariables } from './config/envVariables';


const app: Application = express();

// app.use(cors({
//     origin: [
//         envVariables.FRONTEND_URL, 
//         // envVariables.BETTER_AUTH_URL
//     ],
//     credentials: true,
//     methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
//     allowedHeaders: ["Content-Type", "Authorization"]

// }))

app.use(express.json());

app.use('/api/v1', IndexRoutes);

app.get('/', (req: Request, res: Response) => {
    res.status(status.OK).json({
        success: true,
        message: 'Solaraa server is running!'
    });
});

app.use(globalErrorHandler)
app.use(notFound)

export default app;