import { Server } from 'http';

import axios from 'axios';

import app from '@/app';

const PORT = 3001;

describe('/', () => {
  let server: Server;

  beforeAll(() => {
    server = app.listen(PORT);
  });

  afterAll(() => {
    server.close();
  });

  it('returns "Hello World!"', async () => {
    const response = await axios.get(`http://localhost:${PORT}/`);
    expect(response.data).toEqual({ message: 'Hello World!' });
  });
});
