import Card from '@/domain/card';

class CreateCard {
  public exec(front: string, back: string): Card {
    return new Card(front, back);
  }
}

export default CreateCard;
