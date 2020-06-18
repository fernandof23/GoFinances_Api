import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';
import Transaction from '../models/Transaction';

interface Request {
  id: string;
}

class DeleteTransactionService {
  public async execute({ id }: Request): Promise<void> {
    const transactionRepository = getRepository(Transaction);

    const transaction = await transactionRepository.find({ where: { id } });

    if (!transaction) {
      throw new AppError('Transaction Not Found', 404);
    }

    await transactionRepository.delete(id);
  }
}

export default DeleteTransactionService;
