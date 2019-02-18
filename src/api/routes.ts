import { Request, Response } from 'express';

import API from '@/api/api';

class Routes {
  public applyTo(server: API): void {
    server.app.route('/').get((req: Request, res: Response) => {
      res.status(200).send({
        message: 'Hello World!',
      });
    });

    server.app.route('/cards/:cardId').get(
      (req: Request, res: Response): void => {
        res.status(200).send();
      }
    );
  }
}

export default Routes;
