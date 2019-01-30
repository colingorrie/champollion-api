import InMemoryRepository, { Repository } from '@/repositories/inMemory';

class ServiceContext {
  public static repository: Repository;

  public static initialize(): void {
    this.repository = new InMemoryRepository();
  }
}

export default ServiceContext;
