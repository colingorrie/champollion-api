import ServiceContext from '@/services/context';
import RetrieveCard from '@/services/retrieveCard';
import CreateCard from '@/services/createCard';

it('can read a card from the repository', () => {
  ServiceContext.initialize();
  const createCard = new CreateCard();
  const retrieveCard = new RetrieveCard();

  const createdCard = createCard.exec('妳好', 'hello');
  const retrievedCard = retrieveCard.exec(createdCard.id);
  expect(retrievedCard).toEqual(createdCard);
});
