import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';

import Transaction from '../models/Transaction';
import Category from '../models/Category';
import TransactionRepository from '../repositories/TransactionsRepository';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
  category: string;
}

class CreateTransactionService {
  public async execute({
    category,
    type,
    title,
    value,
  }: Request): Promise<Transaction> {
    const transactionRepository = getRepository(Transaction);
    const categoryRepository = getRepository(Category);
    const getBalance = new TransactionRepository();

    const balance = await getBalance.getBalance();

    if (type === 'outcome') {
      if (value > balance.total) {
        throw new AppError('You not have money for this transaction', 400);
      }
    }

    const categoryExitst = await categoryRepository.findOne({
      where: { title: category },
    });

    let category_id;

    if (!categoryExitst) {
      const categoryCreate = categoryRepository.create({
        title: category,
      });

      await categoryRepository.save(categoryCreate);
      category_id = categoryCreate.id;
    } else {
      category_id = categoryExitst.id;
    }

    const transaction = transactionRepository.create({
      title,
      value,
      type,
      category_id,
    });

    await transactionRepository.save(transaction);

    return transaction;
  }
}

export default CreateTransactionService;
