import bcrypt from 'bcryptjs';
import { PrismaClient } from './src/generated/prisma/client';
import { PrismaLibSql } from '@prisma/adapter-libsql';
import path from 'path';

const dbPath = path.resolve(process.cwd(), 'dev.db');
const adapter = new PrismaLibSql({ url: `file:${dbPath}` });
const prisma = new PrismaClient({ adapter });

async function seed() {
  const hash = await bcrypt.hash('nutri2026', 10);
  const user = await prisma.user.upsert({
    where: { email: 'admin@nutrisynapse.com' },
    update: {},
    create: { email: 'admin@nutrisynapse.com', password: hash, name: 'Bibi Admin' }
  });
  console.log('Admin:', user.email);

  const tags = ['Neurociência', 'Nutrição', 'Sabedoria', 'Mudança de Hábitos', 'Microbiota', 'Diabetes', 'Psicanálise'];
  for (const name of tags) {
    const slug = name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-');
    await prisma.tag.upsert({ where: { slug }, update: {}, create: { name, slug } });
    console.log('Tag:', name);
  }
  await prisma.$disconnect();
}
seed();
