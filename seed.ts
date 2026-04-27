import { config } from "dotenv";
import { resolve } from "path";
config({ path: resolve(process.cwd(), ".env.local") });

import bcrypt from "bcryptjs";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./src/generated/prisma/client";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

async function seed() {
  const hash = await bcrypt.hash("nutri2026", 10);
  const user = await prisma.user.upsert({
    where: { email: "admin@nutrisynapse.com" },
    update: {},
    create: { email: "admin@nutrisynapse.com", password: hash, name: "Bibi Admin" },
  });
  console.log("Admin:", user.email);

  const tags = [
    "Neurociência",
    "Nutrição",
    "Sabedoria",
    "Mudança de Hábitos",
    "Microbiota",
    "Diabetes",
    "Psicanálise",
  ];
  for (const name of tags) {
    const slug = name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/\s+/g, "-");
    await prisma.tag.upsert({ where: { slug }, update: {}, create: { name, slug } });
    console.log("Tag:", name);
  }

  await prisma.$disconnect();
}

seed();
