# Fullstack_Project_HabitTracker

## O que é este projeto?

Este projeto consiste em uma aplicação que ajuda o usuário a manter controle sobre determinados hábitos que ele estabelece. 

Por exemplo: Um usuário determinou que quer começar a ler todos os dias. Ele cria um hábito na aplicação e todos os dias ele marca como feito (ou não marca, se não fez). Sua consistência é mostrada em uma grade que mostra quando ele cumpriu aquele hábito (de maneira semelhante ao 'gráfico' que mostra as contribuições no github)

## A stack

Este projeto foi feito com a seguinte stack:
- TypeScript
- React
- Tailwind
- Shadcn (para componentes) e Lucide (para ícones)
- Express 
- Prisma ORM (para PostgreSQL)

O banco está no neon.tech

## Estrutura do projeto


Em uma pasta root, ficam /web (subpasta para o frontend) e /api (subpasta para o backend de express e prisma). Nesta mesma pasta fica /packages (tipos e schemas comuns).

Já sobre a modelagem do banco de dados, ela fica assim:

- Um usuário que tem nome, email e senha para autenticação e um ou mais hábitos registrados

- Hábitos que tem nome, data de criação e relação com o usuário, além de uma série de "logs", que vão ser os registros que realmente marcam a frequência do usuário naquele hábito

- Um log, com data, booleano de "completado" e relação com determinado hábito. Vai ser @@unique para não duplicar o log


Sugestão de estrutura do Claude:

Fullstack_Project_HabitTracker/          ← raiz do monorepo (repo git)
├── apps/
│   ├── habit_tracker/                   ← Next.js (create-next-app), sem alterações internas
│   │   ├── .next/
│   │   ├── node_modules/
│   │   ├── public/
│   │   ├── src/
│   │   │   └── app/
│   │   ├── .gitignore
│   │   ├── eslint.config.mjs
│   │   ├── next-env.d.ts
│   │   ├── next.config.ts
│   │   ├── package.json
│   │   ├── package-lock.json
│   │   ├── postcss.config.mjs
│   │   ├── tsconfig.json
│   │   └── README.md
│   │
│   └── habit_tracker_api/               ← Express
│       ├── src/
│       │   ├── routes/
│       │   ├── controllers/
│       │   ├── services/
│       │   ├── repositories/
│       │   ├── middlewares/
│       │   ├── lib/
│       │   │   └── prisma.ts
│       │   └── server.ts
│       ├── prisma/
│       │   ├── schema.prisma
│       │   └── migrations/
│       ├── package.json
│       └── tsconfig.json
│
├── packages/
│   └── shared/                          ← tipos e schemas compartilhados
│       ├── src/
│       │   └── types/
│       └── package.json
│
├── package.json                         ← root, com "workspaces"
├── tsconfig.base.json
├── LICENSE
└── README.md                            ← README geral do monorepo