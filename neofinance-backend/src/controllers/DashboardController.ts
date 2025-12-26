import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getDashboardStats = async (req: Request, res: Response) => {
  try {
    // Por enquanto pegamos o primeiro usuário (hardcoded pra facilitar o MVP)
    // Depois mudaremos para pegar do token de autenticação
    const user = await prisma.user.findFirst();

    if (!user) return res.status(404).json({ error: 'User not found' });

    // Agrupa e soma por tipo (INCOME vs EXPENSE)
    const stats = await prisma.transaction.groupBy({
      by: ['type'],
      where: { userId: user.id },
      _sum: { amount: true },
    });

    // Formata os dados para o frontend
    const income = stats.find((s: any) => s.type === 'INCOME')?._sum.amount || 0;
    const expense = stats.find((s: any) => s.type === 'EXPENSE')?._sum.amount || 0;
    const balance = income - expense;

    return res.json({
      balance,
      income,
      expense,
    });
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao buscar estatísticas' });
  }
};