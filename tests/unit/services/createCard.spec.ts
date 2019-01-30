import Card from '@/domain/card';
import CreateCard from '@/services/createCard';

describe('CreateCard', () => {
  it('creates a card with front and back', () => {
    const createCard = new CreateCard();
    const card = new Card('妳好', 'hello');
    expect(createCard.exec('妳好', 'hello')).toEqual(card);
  });
});
