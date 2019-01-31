import Card from '@/domain/card';
import ReadCard, { CardNotFoundError } from '@/services/readCard';
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

describe('ReadCard', () => {
  describe('when called with a non-existent card id', () => {
    it('throws an error if an invalid id is provided', () => {
      const readCard = new ReadCard();
      expect(() => {
        readCard.exec('nonexistent');
      }).toThrow(CardNotFoundError);
    });
  });

  describe('when called with an existing card id', () => {
    let getCard: jest.SpyInstance<(id: string) => Card>;
    let readCard: ReadCard;

    beforeEach(() => {
      jest.mock('@/services/context', () => {
        return jest.fn();
      });

      const mockInitialize = jest.fn();
      ServiceContext.initialize = mockInitialize.bind(ServiceContext);
      ServiceContext.repository = new MockRepository();

      getCard = jest.spyOn(ServiceContext.repository, 'getCard');

      readCard = new ReadCard();
    });

    afterEach(() => {
      getCard.mockRestore();
    });

    it('calls ServiceContext.repository.getCard with that id', () => {
      readCard.exec('realCard');
      expect(getCard).toHaveBeenCalledWith('realCard');
    });

    it('returns the card with that id', () => {
      expect(readCard.exec('realCard')).toEqual(mockCard);
    });
  });
});
