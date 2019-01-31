import { Repository } from '@/repositories/inMemory';
import Card from '@/domain/card';

export const mockCard = new Card('妳好', 'hello');

export class MockRepository implements Repository {
  public addCard(card: Card): string {
    return 'cardId';
  }

  public getCard(_id: string): Card {
    return mockCard;
  }
}
