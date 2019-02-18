import { Request, Response } from 'express';

import API from '@/api/api';
import RetrieveCard from '@/services/retrieveCard';
import Card from '@/domain/card';

class Routes {
  public applyTo(server: API): void {
    server.app.route('/').get((req: Request, res: Response) => {
      res.status(200).send({
        message: 'Hello World!',
      });
    });

    server.app.route('/cards/:cardId').get(
      (req: Request, res: Response): void => {
        const { cardId } = req.params;
        const retrieveCard = new RetrieveCard();

        let card: Card;
        try {
          card = retrieveCard.exec(cardId);
          res.status(200).send({
            front: card.front,
            back: card.back,
          });
        } catch (err) {
          res.status(404).send({ message: 'No card found.' });
        }
      }
    );
  }
}

export default Routes;
