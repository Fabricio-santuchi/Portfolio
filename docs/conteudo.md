# Conteúdo do portfólio (fonte dos textos)

O código copia daqui. Trechos entre `[COLCHETES]` precisam ser confirmados ou preenchidos
antes de publicar — nada com colchete vai pro ar.

---

## Perfil (`src/lib/dados/perfil.ts`)

- Nome: Fabricio Santuchi
- Cargo: Desenvolvedor Full-stack Júnior, com foco em front-end
- Cidade: Campos dos Goytacazes – RJ
- E-mail: fabriciosantuchiof@gmail.com
- GitHub: https://github.com/Fabricio-santuchi
- LinkedIn: https://www.linkedin.com/in/fabricio-santuchi/
- Currículo: `public/curriculo-fabricio-santuchi.pdf` [COLOCAR O PDF ATUALIZADO]
- Site: https://santux.com.br

---

## Metadata

- Título da `/`: `Fabricio Santuchi — Desenvolvedor Full-stack Júnior`
- Descrição da `/`: `Crio ferramentas web publicadas e testadas, do React ao banco de
  dados. Veja meus projetos, como eu trabalho e fale comigo.`
- Título do estudo de caso: `WattCheck — estudo de caso | Fabricio Santuchi`
- Descrição: `Como construí uma calculadora de custo de energia bilíngue, estática, com 217
  testes automatizados e nota 100 no Lighthouse.`

---

## Abertura

- Selo: **Novo** WattCheck está no ar → link `https://wattcheck.santux.com.br`
- Título: `Fabricio Santuchi.` / `Eu crio` [produtos. | APIs. | interfaces. | sistemas.]
- Lead: `Desenvolvedor Full-stack Júnior, com foco em front-end. Ferramentas web publicadas,
  testadas e rápidas — do componente React ao banco de dados.`
- Botão 1: `Ver projetos` → `#projetos`
- Botão 2: `Baixar currículo` / `PDF · [TAMANHO]`

### Itens da busca ⌘K (`comandos.ts`)

| Rótulo | Tipo | Destino |
|---|---|---|
| Ver projetos | seção | `#projetos` |
| Estudo de caso do WattCheck | página | `/projetos/wattcheck` |
| Abrir o WattCheck | site | `https://wattcheck.santux.com.br` |
| Sobre mim | seção | `#sobre` |
| Stack e ferramentas | seção | `#stack` |
| Baixar currículo | PDF | `/curriculo-fabricio-santuchi.pdf` |
| Falar comigo por e-mail | contato | `mailto:fabriciosantuchiof@gmail.com` |
| Abrir GitHub | link | `https://github.com/Fabricio-santuchi` |
| Abrir LinkedIn | link | `https://www.linkedin.com/in/fabricio-santuchi/` |

Vazio: `Nada encontrado. Tente "projetos" ou "github".`

---

## Projetos

Eyebrow: `01 — Projetos` · Título: `Problema real → ferramenta no ar`

### WattCheck (no ar · Front-end)
- **Problema:** ninguém sabe quanto o chuveiro, o PC gamer ou o ar-condicionado pesam na
  conta de luz — a conta chega com um total, sem dizer quem gastou o quê.
- **Solução:** calculadora que mostra o custo por uso, por dia, por mês e por ano de cada
  aparelho, em português e inglês, com tarifas de 8 países.
- Chips: Next.js · TypeScript · Tailwind · shadcn/ui · Zod · Jest · Playwright · Cloudflare
- Site: https://wattcheck.santux.com.br
- Código: https://github.com/Fabricio-santuchi/calculadora-energia
- Prévia: título `Prévia — teste aqui`; campos `Potência do aparelho (W)` (padrão 1200) e
  `Horas de uso por dia` (padrão 4); `Custo por mês`; `Tarifa de exemplo: R$ 0,90 por kWh`.
  Conta: `kWh/mês = W × horas × 30 ÷ 1000`; `custo = kWh × 0,90`.

### API de Aparelhos (em breve · Back-end)
- **Problema:** uma calculadora só é confiável se os dados de potência forem consistentes e
  fáceis de atualizar.
- **Solução:** API REST com validação, logs e testes, rodando em container e ligada a um
  banco PostgreSQL.
- Chips: Node.js · Express · PostgreSQL · Prisma · Zod · Jest

---

## Estudo de caso — WattCheck

- Subtítulo: `Calculadora de custo de energia por aparelho, bilíngue, estática e testada
  de ponta a ponta.`
- Números: `151` testes Jest · `66` testes Playwright · `100` Lighthouse (Performance e SEO)
  · `2` idiomas

**O problema**
A conta de luz chega com um valor total. Ninguém sabe quanto o chuveiro, o PC gamer ou o
ar-condicionado pesam nesse total — e sem saber, não dá pra decidir onde economizar.

**A solução**
Uma calculadora que mostra, enquanto a pessoa digita, quanto cada aparelho custa por uso,
por dia, por mês e por ano. Tem uma página para cada aparelho, em português e inglês, com
as tarifas de 8 países e dicas de economia.

**Decisões técnicas**
- **Site estático, sem servidor** (`output: 'export'`): grátis de hospedar, carrega rápido e
  é ótimo pro Google.
- **Cálculo ao vivo, sem botão:** o resultado muda a cada tecla; a função de cálculo é pura
  e testada separada da tela.
- **Uma rota dinâmica para todos os aparelhos:** página nova é só dado + texto, sem código novo.
- **Bilíngue com rotas** (`/pt` e `/en`) e país padrão pelo idioma (Brasil / EUA).
- **SEO técnico:** metadata por página, canonical, hreflang, sitemap e imagem de prévia
  gerada no build.

**Desafios que resolvi**
- **"1,5" ou "1.5":** brasileiro digita vírgula, americano digita ponto. Escrevi uma função
  que entende os dois — com testes para os casos estranhos.
- **Enter recarregava a página** e apagava tudo o que a pessoa tinha digitado.
- **Chuveiro não é "horas por dia":** criei o custo **por uso** (ex: "por banho de 10 min")
  para aparelhos medidos em minutos.
- **Textos em português aparecendo na versão em inglês.**
- **CI quebrando** porque os tipos das rotas não eram gerados antes do TypeScript checar.

**Como eu trabalhei**
Desenhei as telas antes do código, escrevi uma especificação, dividi tudo em tasks pequenas
com validação, usei commits convencionais e usei IA (Claude Code) como assistente de
programação — revisando cada mudança.

**Resultado**
151 testes unitários e de componente, 66 testes ponta a ponta, CI rodando a cada push,
nota 100 no Lighthouse em Performance e SEO, e deploy automático no Cloudflare com domínio
próprio.

**Próximo passo**
Uma API de aparelhos (Node, Express, PostgreSQL, Prisma) para servir os dados de potência —
o WattCheck continua estático e rápido; a API é um projeto separado.

---

## Sobre

Eyebrow: `02 — Sobre` · Título: `Aprendo construindo coisas que vão pro ar`

- Parágrafo 1: `Sou o Fabricio, de Campos dos Goytacazes (RJ). Estudo Sistemas de
  Informação na Universidade Cândido Mendes e fiz as formações de Desenvolvimento Web e
  React Avançado da Alura.`
- Parágrafo 2: `Ainda não trabalhei em empresa. Por isso trato cada projeto como produto:
  com usuário de verdade, testes automatizados, deploy contínuo e domínio próprio.`
- Fatos:
  - Formação — Sistemas de Informação · 2026
  - Procuro — Vaga júnior full-stack ou front-end
  - Modelo — [REMOTO / HÍBRIDO / PRESENCIAL]
- Linha do tempo:
  - 2022 — Comecei Sistemas de Informação na Cândido Mendes
  - [ANO] — Formação Desenvolvimento Web e React Avançado (Alura)
  - 2026 — WattCheck no ar, com domínio próprio
  - 2026 — Conclusão da faculdade [CONFIRMAR MÊS]
  - Próximo — API de aparelhos

---

## Stack

Eyebrow: `03 — Stack` · Título: `O que eu uso — e onde dá pra ver`

- **Front-end:** React · Next.js · TypeScript · Tailwind CSS · shadcn/ui · Zod
- **Qualidade:** Jest · React Testing Library · Playwright · GitHub Actions · Lighthouse
- **Back-end:** Node.js · Express · PostgreSQL · Prisma
- **Infra e SEO:** Cloudflare · Git e GitHub · Search Console · SEO técnico

(Só entra o que eu sei explicar numa entrevista. Docker entra quando a API usar.)

---

## Contato

- Selo: `Disponível`
- Título: `Bora conversar?`
- Lead: `Estou procurando minha primeira vaga como dev. Me chama pra conversar — respondo rápido.`
- Botão copiar: `Copiar` → `Copiado ✓`
- Botões: `Enviar e-mail` · `GitHub` · `LinkedIn`

## Rodapé

`© 2026 Fabricio Santuchi` · `Feito com Next.js · Lighthouse 100 · código aberto`

## 404

- Título: `Essa página se perdeu no espaço.`
- Texto: `O endereço pode ter mudado. Volte pro início ou use a busca.`
- Botão: `Voltar pro início`
