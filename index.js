import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

import taskRouter from './src/routes/task.router.js';
import {ErrorHandler} from "./src/middlewares/ErrorHandler.js";

app.use('/api/tasks', taskRouter);

app.use(ErrorHandler)

import {connectToDatabase} from './server.js';

connectToDatabase()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`[server]: Server is running at http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.log('Connection error', err)
    })
