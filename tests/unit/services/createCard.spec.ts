import Card from '@/domain/card';
import CreateCard from '@/services/createCard';
import ServiceContext from '@/services/context';
import { Repository } from '@/repositories/inMemory';

const mockCard = new Card('妳好', 'hello');

class MockRepository implements Repository {
  public addCard(_card: Card): Card {
    return mockCard;
  }

  public getCard(_id: string): Card {
    return mockCard;
  }
}

describe('CreateCard', () => {
  let addCard: jest.SpyInstance<(card: Card) => Card>;
  let createCard: CreateCard;

  beforeEach(() => {
    jest.mock('@/services/context', () => {
      return jest.fn();
    });

    const mockInitialize = jest.fn();
    ServiceContext.initialize = mockInitialize.bind(ServiceContext);
    ServiceContext.repository = new MockRepository();

    addCard = jest.spyOn(ServiceContext.repository, 'addCard');

    createCard = new CreateCard();
  });

  afterEach(() => {
    addCard.mockRestore();
  });

  it('calls ServiceContext.repository.addCard with the card to be added', () => {
    const card = new Card('妳好', 'hello');
    createCard.exec('妳好', 'hello');
    expect(addCard).toHaveBeenCalledWith(card);
  });

  it('creates a card with front and back', () => {
    const card = new Card('妳好', 'hello');
    expect(createCard.exec('妳好', 'hello')).toEqual(card);
  });
});
