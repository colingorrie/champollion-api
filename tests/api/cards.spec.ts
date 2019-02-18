import { Server } from 'http';
import { AddressInfo } from 'net';

import axios from 'axios';

import app from '@/app';

describe('/cards/:id', () => {
  let server: Server;
  let serverAddress: AddressInfo;

  beforeAll(async () => {
    server = await app.listen(0);
    serverAddress = server.address() as AddressInfo;
  });

  afterAll(async () => {
    await server.close();
  });

  it('responds to GET requests', async () => {
    const response = await axios.get(
      `http://localhost:${serverAddress.port}/cards/something`
    );
    expect(response.status).toEqual(200);
  });
});
