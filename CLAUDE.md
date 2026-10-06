@AGENTS.md

@docs/design/ESPEC.md

# Portfólio (santux.com.br) — Regras do Projeto

## COMO TRABALHAR COMIGO (leia isso primeiro, sempre)

- Antes de sugerir algo, pense nos casos de borda (vazio, tela pequena, teclado, animação
  desligada, link quebrado) e me diga quais considerou.
- Quando revisar meu código, explique o PORQUÊ de cada problema e aponte riscos,
  não só o que está errado.
- Se uma decisão tiver mais de um caminho, me mostre as opções com prós e contras
  antes de seguir.
- Eu estou aprendendo. NÃO escreva o código completo pronto pra mim, mesmo que pareça mais rápido.
- Sempre explique o conceito antes, me diga o que fazer e por quê, e me deixe escrever o código.
- Só escreva código por mim se eu pedir explicitamente ("pode escrever esse trecho" ou
  "me dá o código"). Quando eu pedir, me dê o trecho completo pronto pra copiar e colar,
  dizendo em qual arquivo e onde ele entra, e explique em poucas linhas o que cada parte
  faz — eu ainda preciso entender o que estou colando.
- Depois que eu escrever algo, revise e aponte erros — não corrija silenciosamente.
- Trabalhe em TASKS pequenas: uma coisa por vez. Depois de cada task, me diga como testar/validar
  antes de seguir pra próxima. Não pule etapa nem faça várias tasks de uma vez.
- Se eu sugerir algo fora do escopo da v1 (ver abaixo), me avise e sugira guardar pra V2 em vez
  de simplesmente implementar.
- No fim de cada task, me entregue a **mensagem de commit já pronta**, preenchida com o que
  foi feito, num bloco pra eu copiar (ex: `git add . && git commit -m "feat: cabeçalho fixo
  com vidro e links das seções"`). Padrão: `tipo: o que mudou` em português, minúsculo, sem
  ponto final (tipos: feat, fix, style, refactor, test, docs, chore).
- O commit sai **só no meu nome**. A assinatura do Claude está desligada em
  `.claude/settings.json` (`attribution` vazio) — não reativar e não escrever
  `Co-Authored-By` nem "Generated with" à mão.
- Mensagem de commit descreve só O QUE mudou e por quê, de forma impessoal (ex: "fix: seta do
  botão não descia no hover"). Nunca citar pessoas ("a pedido do Fabricio", "reportado por...")
  nem colocar assinatura/co-autoria de IA (Co-Authored-By, "Generated with").
- Ao terminar uma task, marque `[x]` nela aqui neste arquivo, no mesmo commit.

## COMO ME ENSINAR (formato fixo, usar sempre)

Objetivo: eu entender rápido e FIXAR o que aprendi. Para cada passo de uma task:

1. **Onde e o quê, bem concreto.** Diga o arquivo exato, onde mexer (perto de qual linha ou
   função) e o que aquele pedaço precisa fazer, em 2–3 frases simples. Nada de explicação
   abstrata antes de eu saber onde estou.
2. **Esqueleto com lacunas.** Me dê a estrutura do trecho com os buracos marcados
   (`/* ??? */` ou `// TODO:` com uma pergunta que me guia). EU preencho as lacunas.
   As lacunas são a parte importante do aprendizado — não preencha por mim.
3. **Dicas em níveis, só se eu pedir.** "dica 1" = empurrão leve (qual conceito usar).
   "dica 2" = mais direta (qual função ou sintaxe). Só escreva a lacuna pronta se eu disser
   "pode escrever esse trecho" ou "me dá o código".
4. **Revisão.** Quando eu colar o que fiz, aponte o que está certo, o que está errado e o
   PORQUÊ, em linguagem simples.
5. **Fixação no fim de cada task (curto).**
   - Resuma em até 3 linhas o que eu aprendi (os conceitos, não o código).
   - Me faça 1 pergunta rápida pra eu responder com minhas palavras.

Passos pequenos: no máximo um arquivo e uma ideia nova por vez.

## CONTEXTO DO PROJETO

Portfólio pessoal de desenvolvedor, em **português**, focado em vagas **no Brasil** (júnior
full-stack ou front-end). Fica no domínio principal **santux.com.br**; cada projeto mora no
seu subdomínio (ex: `wattcheck.santux.com.br`).

Objetivo: em poucos segundos o recrutador entender quem eu sou e **ver** que eu entrego
produto de verdade — publicado, testado e rápido. O visual chama atenção, mas o conteúdo
(projetos reais, estudo de caso, números reais) é o que decide.

Dono: Fabricio Santuchi — Campos dos Goytacazes (RJ) — Sistemas de Informação na
Universidade Cândido Mendes (conclusão 2026) — Alura: Formação Desenvolvimento Web e
React Avançado.

## STACK (travada, não trocar no meio)

- Next.js 16, App Router, `output: 'export'` (site estático), pasta `src/`
- TypeScript em modo `strict`
- Tailwind CSS v4 (tokens de cor no `globals.css` com `@theme`)
- Fontes Geist e Geist Mono via `next/font/google` (já vêm no projeto)
- lucide-react (ícones)
- Jest + React Testing Library (unitários e de componente)
- Playwright (poucos testes ponta a ponta, contra o site buildado)
- ESLint (já vem com o Next)
- GitHub Actions (lint, `tsc --noEmit`, Jest e build a cada push)
- Cloudflare: Workers Static Assets com `wrangler.jsonc` servindo a pasta `out/` (igual ao
  WattCheck), DNS do santux.com.br, Web Analytics sem cookie
- Animações com **CSS puro** (keyframes, transitions, scroll-driven animations) + um pouco
  de JS só onde precisa de estado (palavra girando não precisa; busca e títulos precisam).
  Sem biblioteca de animação na v1.
- Sem backend, sem banco, sem CMS, sem shadcn/ui (componentes próprios, poucos).

## LIMITAÇÕES DO `output: 'export'` (lembrar sempre)

- `redirects`, `rewrites` e `headers` do next.config NÃO funcionam.
- Middleware NÃO funciona. Rotas de API (`app/api`) NÃO funcionam.
- `next/image` só com `images.unoptimized: true`.
- Tudo que usa `window`, `navigator`, `IntersectionObserver` ou teclado vai em Client
  Component (`"use client"`), e só dentro de `useEffect` ou de handlers.

## DECISÕES FIXAS (usar igual no código e nos testes)

- **Idioma:** só pt-BR. `<html lang="pt-BR">`.
- **Páginas:** `/` (página única com seções) e `/projetos/wattcheck` (estudo de caso).
  Sem outras páginas na v1. 404 personalizada.
- **Seções da `/`, nesta ordem e com estes ids:** `topo`, `projetos`, `sobre`, `stack`,
  `contato`. (A seção `como` — mapa da arquitetura + "Teste a API" — é V2.)
- **Dados em arquivos, não no JSX:** `src/lib/dados/projetos.ts`, `stack.ts`, `comandos.ts`
  (itens da busca ⌘K), `numeros.ts` (testes, Lighthouse) e `perfil.ts` (nome, links,
  e-mail). Textos longos em `docs/conteudo.md` são a fonte; o código copia de lá.
- **Números só reais.** Nada de placeholder publicado. Hoje (WattCheck): 151 testes Jest,
  66 testes Playwright, Lighthouse 100 em Performance e SEO. Atualizar `numeros.ts` quando
  mudar.
- **"Em breve":** no máximo **1** card "em breve" visível (a API de aparelhos). Os outros
  projetos só entram quando estiverem no ar.
- **Links externos** (`target="_blank"`) sempre com `rel="noopener noreferrer"`.
- **Acessibilidade (obrigatório):** contraste AA, foco visível em tudo que é clicável,
  alvos de toque ≥ 44 px, `<button>` pra ação e `<a href>` pra navegação (nunca `div`
  clicável), ícone sozinho com `aria-label`, texto animado com versão legível pra leitor
  de tela (`aria-label` + `aria-hidden` no efeito).
- **`prefers-reduced-motion: reduce`:** TODAS as animações param, e o conteúdo continua
  visível e no lugar final (nada fica escondido esperando animação).
- **Performance:** Lighthouse 95+ em Performance, Acessibilidade, Boas práticas e SEO,
  medido no celular. Animações só com `transform` e `opacity` (e `background-position`
  no céu); nada de animar `width`, `top`, `left` em loop.

## VISUAL

Direção aprovada: **"D · Moderno"** — fundo quase preto, céu estrelado com estrelas
cadentes, destaque azul-lavanda, fonte Geist. Fonte da verdade:

- `docs/design/ESPEC.md` — tokens, seções, comportamentos e animações (já importado acima)
- `docs/design/prototipo-D.dc.html` — código do protótipo aprovado (formato do canvas, não
  abre sozinho no navegador; serve pra copiar valores de CSS e ver a estrutura)
- `docs/conteudo.md` — todos os textos
- Canvas ao vivo (privado, do Fabricio): https://claude.ai/artifact/8ZZsBptHFK76cmjkbimpsd

## ESCOPO DA V1 (só isso, nada além)

1. Cabeçalho fixo com vidro, barra de progresso de rolagem, rodapé
2. Abertura: selo, título com palavra girando, texto, 2 botões, busca ⌘K funcionando
3. Projetos: WattCheck (com prévia da calculadora) + API de aparelhos "em breve"
4. Estudo de caso do WattCheck em `/projetos/wattcheck`
5. Sobre (com linha do tempo curta), Stack, Contato (copiar e-mail)
6. Fundo: estrelas + estrelas cadentes + holofote do mouse; borda que acende nos cards;
   títulos que se decodificam
7. SEO técnico, imagem de prévia (Open Graph), sitemap, robots, 404
8. Deploy em santux.com.br, Search Console, Web Analytics

## FORA DO ESCOPO (V2 — não implementar agora)

- Seção "Como funciona": mapa da arquitetura com a requisição viajando, "Teste a API",
  luz de status da API (depende da API de aparelhos existir)
- Formulário de contato enviando pela minha API
- Últimos commits do GitHub ao vivo
- Versão em inglês, tema claro, blog
- Foto: entra quando eu tiver uma boa (deixar o espaço previsto no Sobre)

## ESTRATÉGIA DE TESTES

- **Jest (lógica pura, sem tela):** filtro da busca (`filtrarComandos`), embaralhar título
  (`embaralhar`), integridade dos dados (todo projeto tem nome, problema, solução, links
  válidos; ids de seção existem; no máximo 1 "em breve"), cálculo da prévia do WattCheck.
- **RTL (componentes):** busca filtra ao digitar, mostra "Nada encontrado", setas mudam o
  item ativo, Enter navega, Esc limpa; botão copiar troca o texto pra "Copiado ✓";
  palavra girando tem `aria-label` com a frase completa.
- **Playwright (site buildado):** `/` carrega sem erro no console; Ctrl+K foca a busca;
  links das seções rolam até o lugar certo; `/projetos/wattcheck` abre; 404 funciona;
  sem rolagem lateral em 360, 390, 600, 768, 1024, 1280, 1440 e 1920 px; com `reducedMotion: 'reduce'` nada
  fica invisível.

## TASKS, EM ORDEM (uma por vez, testar antes de avançar)

### Fase 1 — Base

- [x] 0. **Projeto e repositório** — `create-next-app` com TypeScript, ESLint, Tailwind,
  App Router; pasta `src/`; repo no GitHub.
- [x] 1. **Export estático** — `output: 'export'` e `images.unoptimized` no
  `next.config.ts`; conferir `strict` no tsconfig. Validar: `npm run build` gera `out/` e
  `out/` está no `.gitignore`.
- [x] 2. **Jest + React Testing Library** — usar `next/jest`, ambiente jsdom, `jest.setup`
  com `@testing-library/jest-dom`, um teste bobo. Script `test`. Validar: `npm test` passa.
- [ ] 3. **Playwright** — config rodando contra o `out/` servido localmente (ex: pacote
  `serve`), um teste que abre `/`. Script `test:e2e`. Validar: `npm run test:e2e` passa.
- [ ] 4. **GitHub Actions** — workflow com lint, `tsc --noEmit`, Jest e build a cada push
  (gerar os tipos de rota antes do tsc, como no WattCheck). Validar: check verde.

### Fase 2 — Fundação visual e dados

- [ ] 5. **Tokens e fontes** — cores do ESPEC §1 como variáveis no `globals.css` + `@theme`;
  fundo escuro fixo (sem modo claro); Geist e Geist Mono; `lang="pt-BR"`; metadata básica.
  Remover o conteúdo de exemplo do create-next-app e os SVGs de `public/` que não usa.
  Validar: página vazia escura com a fonte certa.
- [ ] 6. **Arquivos de dados** — `src/lib/dados/` (perfil, projetos, stack, numeros,
  comandos) com tipos TypeScript, copiando de `docs/conteudo.md`. Validar: teste de
  integridade dos dados passa.
- [ ] 7. **Layout: cabeçalho e rodapé** — `<Cabecalho>` fixo com vidro (logo, links das
  seções escondidos no celular) e `<Rodape>`; `scroll-behavior: smooth` (só sem
  reduced-motion) e `scroll-margin-top` nas seções. Validar: links rolam até a seção certa
  sem o cabeçalho cobrir o título.

### Fase 3 — Seções

- [ ] 8. **Abertura (estrutura)** — selo, título, texto e os 2 botões (ESPEC §4), sem
  animação ainda. Validar: celular e computador iguais ao protótipo.
- [ ] 9. **Palavra girando no título** — só CSS (4 palavras, ciclo de 10 s), com
  `aria-label` da frase e versão parada no reduced-motion. Validar: teste RTL do
  `aria-label` + olhar com animação desligada no sistema.
- [ ] 10. **Busca ⌘K (lógica)** — função pura `filtrarComandos(lista, texto)` (ignora
  maiúsculas e acentos, ignora espaços nas pontas). Validar: testes Jest.
- [ ] 11. **Busca ⌘K (componente)** — campo com label, lista de links, "Nada encontrado",
  rodapé com a marca. Validar: teste RTL digitando.
- [ ] 12. **Busca ⌘K (teclado)** — Ctrl/⌘+K foca o campo; ↑ ↓ mudam o item ativo
  (`aria-activedescendant`); Enter abre; Esc limpa. Validar: testes RTL + Playwright do Ctrl+K.
- [ ] 13. **Botões da abertura caprichados** — "Ver projetos" com reflexo e seta;
  "Baixar currículo" com ícone e "PDF · tamanho" (ESPEC §4.3). Colocar o PDF do currículo
  em `public/`. Validar: download funciona; hover e foco visíveis.
- [ ] 14. **Projetos** — cards a partir de `projetos.ts`: WattCheck em destaque e API
  "em breve". Validar: links abrem o site e o repo certos.
- [ ] 15. **Prévia do WattCheck no card** — mini calculadora (potência e horas → custo por
  mês) com função pura testada (pode copiar a lógica do WattCheck) e `aria-live`.
  Validar: 1200 W, 4 h, R$ 0,90 → R$ 129,60/mês; teste Jest + RTL.
- [ ] 16. **Estudo de caso** — página `/projetos/wattcheck` com o texto de
  `docs/conteudo.md`, números reais e links. Validar: abre, título e metadata próprios,
  volta pra `/` funciona.
- [ ] 17. **Sobre** — texto + fatos (formação, procuro, modelo) + linha do tempo curta.
  Validar: celular e computador.
- [ ] 18. **Stack** — grupos a partir de `stack.ts`. Validar: celular em 2 colunas.
- [ ] 19. **Contato** — card arredondado, selo "Disponível", e-mail com botão Copiar
  (Clipboard API + "Copiado ✓" por 2 s, sem quebrar se a API não existir), botões de
  e-mail, GitHub e LinkedIn. Validar: teste RTL do copiar.

### Fase 4 — Efeitos (um por task, sempre com reduced-motion)

- [ ] 20. **Céu estrelado** — 3 camadas de estrelas em `background-image` repetido,
  subindo devagar e piscando (ESPEC §8.1). Validar: sem travar no celular (DevTools →
  Performance), parado com reduced-motion.
- [ ] 21. **Estrelas cadentes** — 8 meteoros fixos na tela, um de cada vez (ESPEC §8.2).
- [ ] 22. **Holofote do mouse + borda que acende** — variáveis CSS `--gx/--gy` e
  `--mx/--my` atualizadas no `pointermove` (sem re-render do React). Some no toque.
- [ ] 23. **Títulos que se decodificam** — função pura `embaralhar(texto, progresso)`
  testada + componente com `IntersectionObserver` (roda 1 vez por título).
- [ ] 24. **Entrada ao rolar + barra de progresso** — `animation-timeline: view()` e
  `scroll(root)` dentro de `@supports`; sem suporte, tudo aparece normal.
- [ ] 25. **Revisão de movimento** — conferir no Playwright com `reducedMotion: 'reduce'`
  que nada some; conferir que nenhum efeito pesa (Lighthouse celular 95+).

### Fase 5 — SEO e lançamento

- [ ] 26. **Metadata e Open Graph** — title, description, canonical, imagem de prévia gerada
  no build (`opengraph-image`) pra `/` e pro estudo de caso. Validar: tags no HTML de `out/`.
- [ ] 27. **Sitemap, robots, 404 e favicon** — Validar: `out/sitemap.xml` lista as 2 páginas;
  rota inexistente mostra a 404.
- [ ] 28. **Testes finais** — Playwright completo (ESTRATÉGIA DE TESTES) + sem rolagem
  lateral nos 8 tamanhos (ESPEC §10). Validar: CI verde.
- [ ] 29. **Deploy** — `wrangler.jsonc` servindo `out/`, deploy automático pelo push,
  domínio `santux.com.br` (+ `www` redirecionando). Validar: abre com HTTPS.
- [ ] 30. **Search Console + Web Analytics** — enviar sitemap, ativar analytics.
- [ ] 31. **README de portfólio** — print, link no ar, selos (CI, Lighthouse), stack e
  decisões. Validar: explica o projeto em 1 minuto.
- [ ] 32. **Divulgar** — link no LinkedIn (seção destaque), no GitHub (bio e README de
  perfil) e no currículo.

### Fase 6 — V2 (depois da API de aparelhos no ar)

- [ ] 33. Seção "Como funciona": mapa da arquitetura + "Teste a API" + luz de status +
  requisição viajando (ESPEC §9, já desenhado no protótipo).
- [ ] 34. Formulário de contato enviando pela API (Zod no front e no back).
- [ ] 35. Últimos commits do GitHub ao vivo (API pública, com cache e fallback).
