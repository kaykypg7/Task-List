# 📋 Lista de Tarefas - Angular

Uma aplicação simples de gerenciamento de tarefas construída com Angular 19, perfeita para organizar seu trabalho em três categorias: **To Do**, **Em Progresso** e **Concluído**.

## ✨ Funcionalidades

- ➕ Adicionar novas tarefas
- ➡️ Mover tarefas entre as colunas (To Do → Em Progresso → Concluído)
- ⬅️ Voltar tarefas para etapas anteriores
- 🗑️ Deletar tarefas concluídas
- 💾 Dados salvos no localStorage (persistência local)
- 📱 Interface responsiva e moderna

## 🚀 Como executar

### Desenvolvimento
```bash
npm install
npm start
```

A aplicação estará disponível em `http://localhost:4200`

### Build para produção
```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/my-project`

## 🌐 Deploy na Vercel

1. Faça push do código para um repositório no GitHub
2. Conecte o repositório na Vercel
3. A Vercel detectará automaticamente que é um projeto Angular
4. O deploy será feito automaticamente usando as configurações do `vercel.json`

## 🛠️ Tecnologias utilizadas

- Angular 19
- TypeScript
- CSS3 (Flexbox)
- Font Awesome (ícones)
- Google Fonts (Roboto Slab)

## 📂 Estrutura do projeto

```
src/
├── app/
│   ├── app.component.ts    # Lógica principal da aplicação
│   ├── app.component.html  # Template da interface
│   ├── app.component.css   # Estilos da aplicação
│   └── app.config.ts       # Configuração do Angular
├── environments/           # Configurações de ambiente
├── index.html             # Página principal
└── main.ts                # Bootstrap da aplicação
```

## 💡 Sobre o projeto

Este projeto foi simplificado para ser uma aplicação frontend pura, sem dependências de backend ou banco de dados. Ideal para demonstração e portfólio, utilizando apenas o localStorage para persistência de dados.
