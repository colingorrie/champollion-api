import Card from '@/domain/card';

class NotFoundError extends Error {}

export interface Repository {
  addCard(card: Card): Card;
  getCard(id: string): Card;
}

class InMemoryRepository implements Repository {
  private cards: Map<string, Card>;

  public constructor() {
    this.cards = new Map<string, Card>();
  }

  public addCard(card: Card): Card {
    return card;
  }

  public getCard(id: string): Card {
    const card = this.cards.get(id);
    if (card) return card;
    throw new NotFoundError();
  }
}

export default InMemoryRepository;
