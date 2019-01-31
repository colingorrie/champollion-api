import { Repository } from '@/repositories/inMemory';
import Card from '@/domain/card';

export const mockCard = new Card('妳好', 'hello');

export class MockRepository implements Repository {
  public addCard(_card: Card): Card {
    return mockCard;
  }

  public getCard(_id: string): Card {
    return mockCard;
  }
}
