import { Server } from 'http';
import { AddressInfo } from 'net';

import axios from 'axios';

import app from '@/app';

describe('/', () => {
  let server: Server;
  let serverAddress: AddressInfo;

  beforeAll(() => {
    server = app.listen(0);
    serverAddress = server.address() as AddressInfo;
  });

  afterAll(async () => {
    await server.close();
  });

  it('returns "Hello World!"', async () => {
    const response = await axios.get(`http://localhost:${serverAddress.port}/`);
    expect(response.data).toEqual({ message: 'Hello World!' });
  });
});
