import uuid from 'uuid/v4';

import Card from '@/domain/card';

class NotFoundError extends Error {}

export interface Repository {
  addCard(card: Card): string;
  getCard(id: string): Card;
}

class InMemoryRepository implements Repository {
  private cards: Map<string, Card>;

  public constructor() {
    this.cards = new Map<string, Card>();
  }

  public addCard(card: Card): string {
    const id = uuid();
    this.cards.set(id, card);
    return id;
  }

  public getCard(id: string): Card {
    const card = this.cards.get(id);
    if (card) return card;
    throw new NotFoundError();
  }
}

export default InMemoryRepository;
