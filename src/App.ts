/*
Author: chankruze (chankruze@gmail.com)
Created: Thu Aug 17 2023 11:20:52 GMT-0400 (Eastern Daylight Time)

Copyright (c) geekofia 2023 and beyond
*/

import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

// routes
import rootRoutes from './routes';

class App {
  public app;

  constructor() {
    this.app = express();
    this.useMiddlewares();
    this.mountRoutes();
  }

  private useMiddlewares(): void {
    this.app.use(
      helmet(),
      cors(),
      morgan('dev'),
      express.json(),
      express.urlencoded({ extended: false })
    );
  }

  private mountRoutes(): void {
    // mount routes
    this.app.use('/', rootRoutes);
  }
}

export default new App().app;
