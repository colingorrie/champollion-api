import { Server } from 'http';

import express from 'express';

import Routes from '@/api/routes';

class API {
  public app: express.Application;

  public constructor() {
    this.app = express();
    this.configure();
  }

  private configure(): void {
    new Routes().applyTo(this);
  }

  public listen(port: number, callback?: Function): Server {
    return this.app.listen(port, callback);
  }
}

export default API;
