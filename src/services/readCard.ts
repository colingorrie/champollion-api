import Card from '@/domain/card';
import ServiceContext from '@/services/context';

export class CardNotFoundError extends Error {}

class ReadCard {
  public exec(id: string): Card {
    ServiceContext.initialize();
    try {
      return ServiceContext.repository.getCard(id);
    } catch (err) {
      throw new CardNotFoundError();
    }
  }
}

export default ReadCard;
