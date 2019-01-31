import Card from '@/domain/card';
import ServiceContext from './context';

class CreateCard {
  public exec(front: string, back: string): string {
    const card = new Card(front, back);
    return ServiceContext.repository.addCard(card);
  }
}

export default CreateCard;
