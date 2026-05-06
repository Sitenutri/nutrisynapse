export interface DiaCardapio {
  dia: number;
  tipo: string;
  molho: string;
  camadas: string;
}

export interface SemanaCardapio {
  semana: number;
  dias: DiaCardapio[];
  dicas: string[];
}

export const cardapiosData: SemanaCardapio[] = [
  {
    "semana": 1,
    "dias": [
      {
        "dia": 1,
        "tipo": "delicado",
        "molho": "limão + azeite + sal e pimenta.",
        "camadas": "grão-de-bico + cenoura ralada + pepino em cubos + rúcula + alface roxa + chia."
      },
      {
        "dia": 2,
        "tipo": "delicado",
        "molho": "iogurte natural + ervas frescas (salsinha, cebolinha) + limão.",
        "camadas": "lentilha + brócolis levemente cozido + repolho roxo fininho + agrião + salsinha + linhaça ou semente de girassol."
      },
      {
        "dia": 3,
        "tipo": "delicado",
        "molho": "tahine + limão + cúrcuma + água para afinar.",
        "camadas": "feijão-branco + tomate-cereja em metades + abobrinha em cubos + escarola + gergelim."
      },
      {
        "dia": 4,
        "tipo": "robusto",
        "molho": "azeite + mostarda + limão + orégano.",
        "camadas": "ervilha cozida + cenoura em palitos + couve-manteiga fininha + rúcula + sementes de abóbora."
      },
      {
        "dia": 5,
        "tipo": "robusto",
        "molho": "iogurte natural + limão + hortelã.",
        "camadas": "quinoa cozida + beterraba ralada + pepino em cubos + alface americana + nozes picadas."
      }
    ],
    "dicas": [
      "Você pode usar outras variedades de molho? Consulte o Guia de Molhos para Saladas. São dezenas de opções rápidas, saborosas e pensadas para combinar perfeitamente com potes montados com antecedência."
    ]
  },
  {
    "semana": 2,
    "dias": [
      {
        "dia": 1,
        "tipo": "delicado",
        "molho": "limão + azeite + sal.",
        "camadas": "quinoa cozida + brócolis em floretes pequenos + repolho roxo + almeirão + salsinha + linhaça."
      },
      {
        "dia": 2,
        "tipo": "delicado",
        "molho": "iogurte + alho amassado + limão.",
        "camadas": "grão-de-bico + cenoura ralada + pepino + agrião + rúcula + castanha-do-pará picada."
      },
      {
        "dia": 3,
        "tipo": "delicado",
        "molho": "tahine + limão + cúrcuma.",
        "camadas": "lentilha + beterraba ralada + abóbora em cubos cozida e fria + alface americana + gergelim."
      },
      {
        "dia": 4,
        "tipo": "robusto",
        "molho": "azeite + vinagre de maçã + orégano.",
        "camadas": "ervilha + tomate em cubos sem sementes + couve-manteiga fininha + alface crespa + sementes de girassol."
      },
      {
        "dia": 5,
        "tipo": "robusto",
        "molho": "iogurte + limão + hortelã.",
        "camadas": "feijão-branco + pepino em cubos + cenoura em palitos + espinafre + coentro + chia."
      }
    ],
    "dicas": [
      "(Nozes, castanhas, sementes ou croutons podem ser adicionados pouco antes de comer para manterem-se crocantes)"
    ]
  },
  {
    "semana": 3,
    "dias": [
      {
        "dia": 1,
        "tipo": "delicado",
        "molho": "limão + azeite.",
        "camadas": "quinoa cozida + brócolis + pepino + alface crespa + coentro + chia."
      },
      {
        "dia": 2,
        "tipo": "delicado",
        "molho": "iogurte + mostarda.",
        "camadas": "lentilha + cenoura ralada + repolho roxo + rúcula + castanha de caju."
      },
      {
        "dia": 3,
        "tipo": "delicado",
        "molho": "tahine + limão + alho.",
        "camadas": "grão-de-bico + mandioquinha em cubos + batata-doce em cubos cozida e resfriada + agrião + gergelim."
      },
      {
        "dia": 4,
        "tipo": "robusto",
        "molho": "azeite + vinagre de maçã + ervas finas.",
        "camadas": "feijão-branco + beterraba em cubos + couve-flor + alface americana + nozes."
      },
      {
        "dia": 5,
        "tipo": "robusto",
        "molho": "iogurte + limão.",
        "camadas": "ervilha + cenoura em palitos + pimentão vermelho em tiras + espinafre + linhaça."
      }
    ],
    "dicas": []
  },
  {
    "semana": 4,
    "dias": [
      {
        "dia": 1,
        "tipo": "delicado",
        "molho": "limão + azeite.",
        "camadas": "lentilha + beterraba ralada + tomate-cereja + alface roxa + manjericão + chia."
      },
      {
        "dia": 2,
        "tipo": "delicado",
        "molho": "iogurte + alho + limão.",
        "camadas": "grão-de-bico + pimentão vermelho + pepino + rúcula + salsinha + linhaça."
      },
      {
        "dia": 3,
        "tipo": "delicado",
        "molho": "tahine + limão + páprica.",
        "camadas": "quinoa cozida + cenoura ralada + repolho roxo + agrião + gergelim."
      },
      {
        "dia": 4,
        "tipo": "robusto",
        "molho": "azeite + vinagre de maçã + orégano.",
        "camadas": "feijão-branco + beterraba em cubos + couve-manteiga + alface crespa + sementes de girassol."
      },
      {
        "dia": 5,
        "tipo": "robusto",
        "molho": "iogurte + ervas.",
        "camadas": "ervilha + tomate em cubos sem sementes + espinafre + coentro ou salsinha + castanha-do-pará."
      }
    ],
    "dicas": [
      "Quer variar o molho? Consulte o Guia de Molhos para salada."
    ]
  },
  {
    "semana": 5,
    "dias": [
      {
        "dia": 1,
        "tipo": "delicado",
        "molho": "limão + azeite.",
        "camadas": "quinoa cozida + brócolis + couve-manteiga fininha + alface crespa + coentro + linhaça."
      },
      {
        "dia": 2,
        "tipo": "delicado",
        "molho": "iogurte + mostarda.",
        "camadas": "lentilha + pepino + cenoura ralada + rúcula + salsinha + castanha de caju."
      },
      {
        "dia": 3,
        "tipo": "delicado",
        "molho": "tahine + limão + cúrcuma.",
        "camadas": "grão-de-bico + abobrinha crua em cubos + pimentão verde + agrião + gergelim."
      },
      {
        "dia": 4,
        "tipo": "robusto",
        "molho": "azeite + vinagre + alho.",
        "camadas": "feijão-vermelho + beterraba em cubos + escarola + alface americana + sementes de abóbora."
      },
      {
        "dia": 5,
        "tipo": "robusto",
        "molho": "iogurte + limão.",
        "camadas": "ervilha + cenoura em palitos + couve-flor + espinafre + chia."
      }
    ],
    "dicas": [
      "Quer variar o molho? Consulte o Guia de Molhos para salada."
    ]
  },
  {
    "semana": 6,
    "dias": [
      {
        "dia": 1,
        "tipo": "delicado",
        "molho": "limão + azeite + alho-poró.",
        "camadas": "lentilha + cenoura ralada + pepino + alface americana + hortelã + chia."
      },
      {
        "dia": 2,
        "tipo": "delicado",
        "molho": "iogurte + limão + endro (ou salsinha).",
        "camadas": "grão-de-bico + beterraba em cubos + repolho roxo + rúcula + linhaça."
      },
      {
        "dia": 3,
        "tipo": "delicado",
        "molho": "tahine + limão + gengibre ralado.",
        "camadas": "quinoa cozida + abóbora em cubos + couve-flor + agrião + gergelim."
      },
      {
        "dia": 4,
        "tipo": "robusto",
        "molho": "azeite + vinagre + manjericão.",
        "camadas": "feijão-verde (ou feijão-de-corda, evitando fradinho) + cenoura em palitos + alface crespa + sementes de girassol."
      },
      {
        "dia": 5,
        "tipo": "robusto",
        "molho": "iogurte + alho.",
        "camadas": "ervilha + pepino + tomate em cubos + espinafre + coentro + castanha-do-pará."
      }
    ],
    "dicas": [
      "Quer variar o molho? Consulte o Guia de Molhos para salada."
    ]
  },
  {
    "semana": 7,
    "dias": [
      {
        "dia": 1,
        "tipo": "delicado",
        "molho": "limão + azeite.",
        "camadas": "grão-de-bico + tomate-cereja + pepino + alface americana + manjericão + gergelim."
      },
      {
        "dia": 2,
        "tipo": "delicado",
        "molho": "iogurte + alho + orégano.",
        "camadas": "lentilha + pimentão amarelo + cenoura ralada + rúcula + linhaça."
      },
      {
        "dia": 3,
        "tipo": "delicado",
        "molho": "tahine + limão + \"zaatar\" caseiro (orégano + gergelim).",
        "camadas": "feijão-branco + abobrinha em cubos + couve-flor + agrião."
      },
      {
        "dia": 4,
        "tipo": "robusto",
        "molho": "azeite + vinagre de maçã + alho-poró.",
        "camadas": "quinoa + beterraba em cubos + repolho roxo + alface crespa + sementes de abóbora."
      },
      {
        "dia": 5,
        "tipo": "robusto",
        "molho": "iogurte + limão.",
        "camadas": "ervilha + pepino + tomate em cubos + espinafre + coentro + castanha de caju."
      }
    ],
    "dicas": [
      "Quer variar o molho? Consulte o Guia de Molhos para salada."
    ]
  },
  {
    "semana": 8,
    "dias": [
      {
        "dia": 1,
        "tipo": "delicado",
        "molho": "limão + azeite.",
        "camadas": "quinoa + brócolis + repolho branco fininho + alface crespa + coentro + chia."
      },
      {
        "dia": 2,
        "tipo": "delicado",
        "molho": "iogurte + mostarda.",
        "camadas": "grão-de-bico + beterraba ralada + couve-flor + rúcula + linhaça."
      },
      {
        "dia": 3,
        "tipo": "delicado",
        "molho": "tahine + limão + cúrcuma.",
        "camadas": "lentilha + cenoura em palitos + batata doce em cubos + agrião + gergelim."
      },
      {
        "dia": 4,
        "tipo": "robusto",
        "molho": "azeite + vinagre + ervas finas.",
        "camadas": "feijão-branco + mandioquinha em cubos + repolho roxo + alface americana + sementes de girassol."
      },
      {
        "dia": 5,
        "tipo": "robusto",
        "molho": "iogurte + alho.",
        "camadas": "ervilha + abobrinha em cubos + espinafre + salsinha + castanha-do-pará."
      }
    ],
    "dicas": []
  },
  {
    "semana": 9,
    "dias": [
      {
        "dia": 1,
        "tipo": "delicado",
        "molho": "limão + azeite + alho.",
        "camadas": "feijão-vermelho + cenoura ralada + brócolis + alface americana + coentro + chia."
      },
      {
        "dia": 2,
        "tipo": "delicado",
        "molho": "iogurte + limão.",
        "camadas": "lentilha + beterraba em cubos + repolho roxo + rúcula + linhaça."
      },
      {
        "dia": 3,
        "tipo": "delicado",
        "molho": "tahine + limão + páprica.",
        "camadas": "grão-de-bico + abóbora em cubos + couve-flor + agrião + gergelim."
      },
      {
        "dia": 4,
        "tipo": "robusto",
        "molho": "azeite + vinagre + alho-poró.",
        "camadas": "quinoa + cenoura em palitos +pepino + alface crespa + sementes de abóbora."
      },
      {
        "dia": 5,
        "tipo": "robusto",
        "molho": "iogurte + ervas.",
        "camadas": "ervilha + pepino + tomate em cubos + espinafre + salsinha + castanha de caju."
      }
    ],
    "dicas": [
      "Quer variar o molho? Consulte o Guia de Molhos para salada."
    ]
  },
  {
    "semana": 10,
    "dias": [
      {
        "dia": 1,
        "tipo": "delicado",
        "molho": "iogurte natural em quantidade maior + limão + ervas.",
        "camadas": "grão-de-bico + pepino + cenoura ralada + alface americana + salsinha + chia."
      },
      {
        "dia": 2,
        "tipo": "delicado",
        "molho": "kefir + ervas + limão.",
        "camadas": "lentilha + beterraba em cubos + repolho roxo + rúcula + linhaça."
      },
      {
        "dia": 3,
        "tipo": "delicado",
        "molho": "limão + azeite + pequena porção de chucrute no fundo.",
        "camadas": "feijão-branco + tomate-cereja + pepino + agrião + gergelim."
      },
      {
        "dia": 4,
        "tipo": "robusto",
        "molho": "azeite + vinagre + cenoura fermentada picada.",
        "camadas": "quinoa + cenoura em palitos + couve-flor + alface crespa + sementes de girassol."
      },
      {
        "dia": 5,
        "tipo": "robusto",
        "molho": "iogurte + alho.",
        "camadas": "ervilha + pepino + pimentão amarelo + espinafre + coentro + castanha-do-pará."
      }
    ],
    "dicas": [
      "Dica: Mantenha os potes sempre refrigerados. Potes com molho de Iogurte/kefir e vegetais fermentados devem ser consumidos em até no máximo 5 dias após o preparo."
    ]
  }
];
