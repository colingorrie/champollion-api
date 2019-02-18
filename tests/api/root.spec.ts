import { Server } from 'http';
import { AddressInfo } from 'net';

import axios, { AxiosInstance } from 'axios';

import app from '@/app';

describe('/', () => {
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

  it('returns "Hello World!"', async () => {
    const response = await API.get(`/`);
    expect(response.data).toEqual({ message: 'Hello World!' });
  });
});
