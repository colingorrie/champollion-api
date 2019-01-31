import Card from '@/domain/card';
import RetrieveCard, { CardNotFoundError } from '@/services/retrieveCard';
import ServiceContext from '@/services/context';
import { MockRepository, mockCard } from 'tests/mocks';

describe('RetrieveCard', () => {
  describe('when called with a non-existent card id', () => {
    it('throws an error if an invalid id is provided', () => {
      const retrieveCard = new RetrieveCard();
      expect(() => {
        retrieveCard.exec('nonexistent');
      }).toThrow(CardNotFoundError);
    });
  });

  describe('when called with an existing card id', () => {
    let getCard: jest.SpyInstance<(id: string) => Card>;
    let retrieveCard: RetrieveCard;

    beforeEach(() => {
      jest.mock('@/services/context', () => {
        return jest.fn();
      });

      const mockInitialize = jest.fn();
      ServiceContext.initialize = mockInitialize.bind(ServiceContext);
      ServiceContext.repository = new MockRepository();

      getCard = jest.spyOn(ServiceContext.repository, 'getCard');

      retrieveCard = new RetrieveCard();
    });

    afterEach(() => {
      getCard.mockRestore();
    });

    it('calls ServiceContext.repository.getCard with that id', () => {
      retrieveCard.exec('realCard');
      expect(getCard).toHaveBeenCalledWith('realCard');
    });

    it('returns the card with that id', () => {
      expect(retrieveCard.exec('realCard')).toEqual(mockCard);
    });
  });
});
