import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // 1. Criar Usuário
  const user = await prisma.user.create({
    data: {
      email: 'admin@neofinance.com',
      name: 'Gabriel Soares',
    }
  })

  // 2. Criar Categorias
  const catDev = await prisma.category.create({
    data: { name: 'Freelance Dev', type: 'INCOME', userId: user.id, icon: 'code' }
  })
  const catSalario = await prisma.category.create({
    data: { name: 'Salário CLT', type: 'INCOME', userId: user.id, icon: 'briefcase' }
  })
  const catAlim = await prisma.category.create({
    data: { name: 'Alimentação', type: 'EXPENSE', userId: user.id, icon: 'coffee' }
  })
  const catTech = await prisma.category.create({
    data: { name: 'Setup/Equipamentos', type: 'EXPENSE', userId: user.id, icon: 'monitor' }
  })

  // 3. Criar Transações (para o gráfico ficar bonito)
  await prisma.transaction.createMany({
    data: [
      { description: 'Recebimento Freela', amount: 5000, type: 'INCOME', categoryId: catDev.id, userId: user.id, date: new Date('2023-10-10') },
      { description: 'Salário Mensal', amount: 4000, type: 'INCOME', categoryId: catSalario.id, userId: user.id, date: new Date('2023-10-05') },
      { description: 'iFood Fim de semana', amount: 150, type: 'EXPENSE', categoryId: catAlim.id, userId: user.id, date: new Date('2023-10-12') },
      { description: 'Teclado Mecânico', amount: 800, type: 'EXPENSE', categoryId: catTech.id, userId: user.id, date: new Date('2023-10-15') },
    ]
  })

  console.log('Banco populado com sucesso! 🚀')
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect())