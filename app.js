import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'logger';

import indexRouter from './routes/index';

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/', indexRouter);
app.use('/users', usersRouter);

export default app;