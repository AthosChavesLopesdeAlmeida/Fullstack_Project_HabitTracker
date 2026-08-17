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

Fullstack_Project_HabitTracker/          ← raiz do monorepo
├── apps/
│   ├── web/                             ← sua pasta habit_tracker atual, sem mudanças internas
│   │   ├── .next/
│   │   ├── public/
│   │   ├── src/app/
│   │   ├── next.config.ts
│   │   └── package.json
│   │
│   └── api/                             ← novo, Express
│       ├── src/
│       │   ├── routes/
│       │   ├── controllers/
│       │   ├── services/
│       │   ├── repositories/
│       │   ├── middlewares/
│       │   └── lib/prisma.ts
│       │   └── server.ts
│       ├── prisma/
│       │   ├── schema.prisma
│       │   └── migrations/
│       └── package.json
│
├── packages/
│   └── shared/                          ← novo, tipos/schemas comuns
│       ├── src/types/
│       └── package.json
│
├── package.json                         ← novo, root com workspaces
└── tsconfig.base.json