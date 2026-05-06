export interface LeguminosaPrep {
  id: string;
  nome: string;
  remolho: string;
  cozimento: string;
  alerta: string;
}

export const leguminosasPrep: LeguminosaPrep[] = [
  {
    id: "grao-de-bico",
    nome: "Grão-de-bico",
    remolho: "12–24 h (mínimo de 12 horas com trocas de água)",
    cozimento: "30–40 min em pressão (ou 90-120 min na convencional)",
    alerta: "Comece o remolho do grão-de-bico na noite anterior!"
  },
  {
    id: "feijao-branco",
    nome: "Feijão-branco",
    remolho: "8–12 h",
    cozimento: "20–25 min em pressão (ou 60-90 min na convencional)",
    alerta: "Comece o remolho do feijão-branco na noite anterior!"
  },
  {
    id: "feijao-vermelho",
    nome: "Feijão-vermelho",
    remolho: "8–12 h",
    cozimento: "25–30 min em pressão (ou 60-90 min na convencional)",
    alerta: "Comece o remolho do feijão-vermelho na noite anterior!"
  },
  {
    id: "feijao-fradinho",
    nome: "Feijão-fradinho",
    remolho: "6–8 h",
    cozimento: "15–20 min em pressão (ou 40-50 min na convencional)",
    alerta: "Lembre-se de colocar o feijão de molho mais cedo ou na manhã do mesmo dia."
  },
  {
    id: "lentilha-marrom-verde",
    nome: "Lentilha Marrom/Verde",
    remolho: "2–4 h (opcional)",
    cozimento: "10–12 min em pressão (ou 25-30 min na convencional)",
    alerta: "O remolho da lentilha é opcional e rápido, pode ser feito um pouco antes do preparo."
  },
  {
    id: "lentilha-vermelha",
    nome: "Lentilha Vermelha/Laranja",
    remolho: "Não é necessário",
    cozimento: "15–20 min na panela convencional (não recomendado usar pressão)",
    alerta: "Pronta para cozinhar! Não precisa de remolho prévio."
  },
  {
    id: "ervilha-seca",
    nome: "Ervilha seca (metades)",
    remolho: "Não é necessário",
    cozimento: "10–15 min em pressão (ou 30-45 min na convencional)",
    alerta: "Pronta para cozinhar! Tende a formar espuma, cozinhe com um fio de azeite."
  }
];
