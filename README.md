# ConectaCT — Portal Colaborativo
Projeto de Extensão (149h) — Portal informativo sobre o ECA, canais de denúncia e divulgação de ações do Conselho Tutelar.

## 🚀 Publicar rapidamente
1. Edite `data/contacts.json` com os contatos da sua cidade.
2. Crie um **Google Forms** para “Enviar ação/evento” e substitua o link em `main.js` (const `FORM_URL`).
3. Publique:
   - **Netlify:** arraste a pasta inteira.
   - **GitHub Pages:** crie repositório, suba os arquivos, habilite Pages (branch `main`, root).

## 🧱 Estrutura
- `index.html` — página única com seções.
- `styles.css` — estilos base (responsivo, acessível).
- `main.js` — carrega eventos/contatos e linka o Google Forms.
- `main.ts` — versão em TypeScript (opcional).
- `data/events.json` — eventos de exemplo.
- `data/contacts.json` — contatos do município.
- `assets/` — para imagens.

## 📋 Conteúdo e LGPD
- O site **não coleta denúncias**. Direciona para canais oficiais (Disque 100, Ouvidoria).
- Evite dados sensíveis. Em formulários, colete o mínimo e informe finalidade.

## ✅ Checklist de entrega
- [ ] Site publicado + prints.
- [ ] Formulário criado (link substituído).
- [ ] Contatos locais preenchidos.
- [ ] 1 entrevista com conselheiro + 1 com educador.
- [ ] 10 respostas do questionário da comunidade.
- [ ] Referências com datas de acesso.
- [ ] Relatório técnico + paper.

## 🧪 Testes rápidos
- Mobile e desktop.
- Contraste e navegação por teclado.
- Botões “Discar 100” e “Ouvidoria”.
- Simular envio de ação via Forms.

## 🛠️ TypeScript (opcional)
Edite `main.ts` e compile para `main.js` com seu bundler (Vite/tsc). O `main.js` já está pronto.
