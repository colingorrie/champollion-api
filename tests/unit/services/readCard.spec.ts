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
  it('throws an error if an invalid id is provided', () => {
    const readCard = new ReadCard();
    expect(() => {
      readCard.exec('nonexistent');
    }).toThrow(CardNotFoundError);
  });

  it('returns a card that is found', () => {
    jest.mock('@/services/context', () => {
      return jest.fn();
    });

    const mockInitialize = jest.fn();
    mockInitialize.mockReturnValue('worked');
    ServiceContext.initialize = mockInitialize.bind(ServiceContext);
    ServiceContext.repository = new MockRepository();

    const readCard = new ReadCard();
    expect(readCard.exec('realCard')).toEqual(mockCard);
    expect(mockInitialize).toHaveBeenCalledTimes(1);
  });
});
