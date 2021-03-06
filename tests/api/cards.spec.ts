import { Server } from 'http';
import { AddressInfo } from 'net';

import axios, { AxiosInstance } from 'axios';

import app from '@/app';

import ServiceContext from '@/services/context';
import CreateCard from '@/services/createCard';

describe('/cards/:cardId', () => {
  let server: Server;
  let API: AxiosInstance;

  beforeAll(async () => {
    server = await app.listen(0);

    const serverAddress = server.address() as AddressInfo;
    API = axios.create({
      baseURL: `http://localhost:${serverAddress.port}`,
      validateStatus: status => status >= 200 && status <= 503,
    });
  });

  afterAll(async () => {
    await server.close();
  });

  describe('given cardId points to an existing card', () => {
    let cardId: string;
    let cardFront = '你好';
    let cardBack = 'hello';

    beforeAll(() => {
      ServiceContext.initialize();
      const createCard = new CreateCard();
      cardId = createCard.exec(cardFront, cardBack);
    });

    describe('when called with cardId', () => {
      it('responds with the card', async () => {
        const response = await API.get(`/cards/${cardId}`);
        expect(response.status).toEqual(200);
        expect(response.data).toEqual({ front: cardFront, back: cardBack });
      });
    });
  });

  describe('given cardId does not point to an existing card', () => {
    describe('when called with cardId', () => {
      it('responds with 404 for nonexistent card', async () => {
        const response = await API.get(`/cards/nonexistent`);
        expect(response.status).toEqual(404);
      });
    });
  });
});
