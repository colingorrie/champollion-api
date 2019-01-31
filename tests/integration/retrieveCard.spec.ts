import ServiceContext from '@/services/context';
import RetrieveCard from '@/services/retrieveCard';
import CreateCard from '@/services/createCard';

it('can read a card from the repository', () => {
  ServiceContext.initialize();
  const createCard = new CreateCard();
  const retrieveCard = new RetrieveCard();

  const createdCardId = createCard.exec('你好', 'hello');
  const retrievedCard = retrieveCard.exec(createdCardId);

  expect(retrievedCard.front).toEqual('你好');
  expect(retrievedCard.back).toEqual('hello');
});
