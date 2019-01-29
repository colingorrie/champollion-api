import app from '@/app';

describe('/', () => {
  it('returns "Hello World!"', () => {
    expect(app.get('/')).toEqual('Hello World!');
  });
});
