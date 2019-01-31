import Card from '@/domain/card';
import ServiceContext from '@/services/context';

export class CardNotFoundError extends Error {}

class RetrieveCard {
  public exec(id: string): Card {
    try {
      return ServiceContext.repository.getCard(id);
    } catch (err) {
      throw new CardNotFoundError();
    }
  }
}

export default RetrieveCard;
