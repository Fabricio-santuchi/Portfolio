# ESPEC — Portfólio "D · Moderno"

Especificação visual e de comportamento. Os valores vêm do protótipo aprovado
(`docs/design/prototipo-D.dc.html`). Textos ficam em `docs/conteudo.md`.
Quando este arquivo e o protótipo discordarem, **vale este arquivo**.

---

## 1. Tokens

### Cores

| Token | Valor | Uso |
|---|---|---|
| `fundo` | `#0B0C10` | fundo da página |
| `superficie` | `#111318` | cards (projetos, stack, sobre, contato) |
| `superficie-2` | `#14161C` | busca ⌘K, botão secundário, card em destaque |
| `fundo-campo` | `#0E1015` | campos, caixas internas, prévia |
| `borda` | `#23262F` | borda de card |
| `borda-forte` | `#2E333D` | borda de botão, campo, chip |
| `texto` | `#EDEFF3` | texto principal |
| `texto-suave` | `#AEB4BF` | parágrafos dentro de card |
| `texto-mudo` | `#9AA1AD` | legendas, rótulos, rodapé |
| `destaque` | `#8FA8FF` | links, palavra girando, ícones, brilhos |
| `destaque-fundo` | `#1E2230` | círculo de ícone, hover de item |
| `sucesso` | `#4ADE80` | bolinha "Disponível", "Copiado ✓" (texto `#86EFAC`) |

Contraste conferido: `texto` e `texto-mudo` sobre `fundo` e `superficie` passam AA.
`destaque` sobre `fundo` passa AA pra texto ≥ 14 px.

### Tipografia

- Fonte: **Geist** (400–800); números, código e rótulos técnicos: **Geist Mono**.
- `h1`: `clamp(44px, 6vw, 82px)`, peso 700, `line-height: 1`, `letter-spacing: -0.04em`
- `h2`: `clamp(34px, 4.4vw, 56px)`, peso 700, `line-height: 1.04`, `letter-spacing: -0.035em`
- Texto de apoio (lead): `clamp(17px, 1.6vw, 20px)`, `line-height: 1.55`, cor `texto-mudo`
- "Eyebrow" (ex: `01 — Projetos`): 13 px, peso 600, maiúsculas, `letter-spacing: .06em`,
  cor `destaque`
- Parágrafo de card: 15 px, `line-height: 1.5`, cor `texto-suave`

### Espaçamento e forma

- Conteúdo: `max-width: 1240px`, margem lateral `clamp(20px, 4vw, 56px)`
- Seção: `padding-top: clamp(72px, 9vw, 128px)`
- Raios: card 18 px · busca 16 px · campo 10 px · botão e chip 999 px (pílula) ·
  card do contato 32 px (24 px no celular)
- Alvo de toque mínimo: 44 px de altura
- Quebra principal: **820 px** (abaixo disso = celular)

---

## 2. Estrutura da página `/`

```
<Fundo />                (céu, estrelas cadentes, holofote — atrás de tudo)
<BarraProgresso />       (fixa no topo)
<Cabecalho />            (fixo, vidro)
<main>
  #topo     Abertura + Busca ⌘K
  #projetos Projetos
  #sobre    Sobre
  #stack    Stack
  #contato  Contato
</main>
<Rodape />
```

Cada seção tem `scroll-margin-top` igual à altura do cabeçalho (~80 px).

---

## 3. Cabeçalho e rodapé

**Cabeçalho:** `position: sticky; top: 0`, fundo `rgba(11,12,16,.82)` com
`backdrop-filter: blur(12px)`, borda inferior `#1E2129`.
- Esquerda: logo `fabricio` + `.dev` em `destaque` (texto, link pra `#topo`).
- Direita: links `Projetos · Sobre · Stack · Contato` (15 px, `texto-mudo`, hover `texto`).
  **No celular os links somem** (a busca ⌘K faz esse papel).

**Rodapé:** borda superior `#1E2129`, 13 px `texto-mudo`, dois lados:
`© 2026 Fabricio Santuchi` · `Feito com Next.js · Lighthouse 100 · código aberto` (Geist
Mono, com link pro repo).

---

## 4. Abertura (`#topo`)

Grade de 2 colunas (texto | busca), `gap: 56px`, alinhadas ao centro. No celular, 1 coluna
(texto em cima, busca embaixo).

### 4.1 Texto
1. **Selo** (pílula `superficie-2`, borda `borda-forte`, 13 px): `<b>Novo</b> WattCheck está no ar`
   — "Novo" em `destaque`. É um link pro WattCheck.
2. **Título `h1`:** `Fabricio Santuchi.` + quebra + `Eu crio ` + **palavra girando**.
3. **Lead** (ver conteúdo).
4. **Botões** (§4.3).

### 4.2 Palavra girando
- Palavras: `produtos.` `APIs.` `interfaces.` `sistemas.` — cor `destaque`.
- Só CSS: as 4 palavras empilhadas na mesma célula de grid (`display: inline-grid`,
  `overflow: hidden`, `height: 1em`), cada uma com a mesma animação de 10 s e
  atraso de 0 / 2,5 / 5 / 7,5 s.
- Keyframes: `0%` abaixo (`translateY(110%)`) → `5%–22%` no lugar → `27%–100%` acima
  (`translateY(-110%)`). Curva `cubic-bezier(.7,0,.3,1)`.
- Acessibilidade: o `h1` tem `aria-label="Fabricio Santuchi. Eu crio produtos, APIs,
  interfaces e sistemas."` e as palavras animadas ficam `aria-hidden`.
- Reduced-motion: mostra só `produtos.` parado.

### 4.3 Botões
- **"Ver projetos"** (principal, link `#projetos`): pílula clara (`texto` como fundo,
  `fundo` como cor do texto), altura 56 px, sombra azul
  `0 10px 30px -8px rgba(143,168,255,.55)`. À direita, círculo escuro de 38 px com seta pra
  baixo. Um **reflexo** de luz (faixa branca inclinada) atravessa o botão a cada 3,6 s.
  Hover: sobe 2 px e a seta desce 3 px.
- **"Baixar currículo"** (link pro PDF em `public/`, atributo `download`): pílula escura de
  vidro, borda `borda-forte`, altura 56 px. Círculo de 40 px com ícone de documento em
  `destaque`. Duas linhas: `Baixar currículo` e `PDF · 180 KB` (Geist Mono 11 px,
  tamanho real do arquivo). Hover: borda `destaque`, ícone desce 2 px.

### 4.4 Busca ⌘K
Caixa `superficie-2`, borda `borda-forte`, raio 16 px, sombra grande
`0 30px 80px -20px rgba(0,0,0,.7)`. Entra com uma mola (`opacity 0 → 1`,
`translateY(24px) scale(.96) → 0 1`, 0,7 s, atraso 0,2 s).

- **Topo:** ícone de lupa + campo "O que você quer ver?" (com `<label>` escondido
  "Buscar no portfólio") + etiqueta `⌘K` (Geist Mono 12 px, borda).
- **Lista:** itens de `comandos.ts` (rótulo à esquerda, tipo à direita em 12 px
  `texto-mudo`). Altura de item 44 px, raio 10 px, hover/ativo fundo `#1E2230`.
- **Vazio:** `Nada encontrado. Tente "projetos" ou "github".`
- **Rodapé da caixa:** `↑↓ navegar · Enter abrir · Esc limpar` e `santux.com.br` (12 px).
- **Comportamento:**
  - Filtra enquanto digita: ignora maiúsculas, acentos e espaços nas pontas.
  - `Ctrl+K` / `⌘K` em qualquer lugar da página foca o campo (e não abre a busca do
    navegador: `preventDefault`).
  - `↑` `↓` movem o item ativo (circular); `aria-activedescendant` no campo aponta pro item.
  - `Enter` abre o item ativo; `Esc` limpa o texto.
  - Papel ARIA: campo `role="combobox"` com `aria-controls` da lista `role="listbox"`.

---

## 5. Projetos (`#projetos`)

Cabeçalho da seção: eyebrow `01 — Projetos` + `h2` (título que se decodifica, §8.4).

Grade de 6 colunas: os 2 cards principais ocupam 3 colunas cada. No celular, 1 coluna.

**Card:** `superficie`, borda `borda`, raio 18 px, `padding: 26px`, borda que acende (§8.3).
Hover: sobe 3 px e a borda fica `#4B5A8F`.
- Topo: selo de status + tipo (Geist Mono 12 px).
  - Selo "No ar": fundo `rgba(74,222,128,.14)`, texto `#86EFAC`, borda `rgba(74,222,128,.35)`.
  - Selo "Em breve": fundo `#1B1E26`, texto `#C6CBD4`, borda `borda-forte`.
- Nome (`h3`, 26 px), **Problema:** e **Solução:** (rótulo em `texto`, resto em `texto-suave`).
- Chips de tecnologia (12 px, fundo `#181B22`, borda `#2A2E38`, raio 8 px).
- Botões no rodapé do card (altura 44 px).

**Card WattCheck (destaque):** fundo `superficie-2`, borda `#34405F`. Inclui a **prévia**:
caixa `fundo-campo` com o título `PRÉVIA — TESTE AQUI` (12 px, `destaque`), dois campos
lado a lado (Potência em W, Horas por dia; aceita vírgula), o resultado
`Custo por mês` em destaque (Geist Mono ~40 px), uma linha `X kWh/mês · R$ Y por ano`,
barra de 10 px (fundo `#1E2129`, preenchimento `destaque`, máximo em 400 kWh) e
`Tarifa de exemplo: R$ 0,90 por kWh`. Resultado com `aria-live="polite"`.
Botões: `Ver site completo` (principal), `Estudo de caso` (secundário), `Código` (secundário).

**Card API de aparelhos:** selo "Em breve", sem botões de site; botão `Código` só quando o
repo existir.

---

## 6. Estudo de caso (`/projetos/wattcheck`)

Página própria, mesmo cabeçalho/rodapé/fundo. Coluna de leitura de ~760 px.

1. Trilha `Início / Projetos / WattCheck` + `h1` `WattCheck` + subtítulo + botões
   (`Abrir o site`, `Ver o código`).
2. Faixa de números (4 caixas): `151 testes Jest` · `66 testes Playwright` ·
   `100 Lighthouse` · `2 idiomas`. Números em Geist Mono grande, contando de 0 ao entrar
   na tela (0,9 s; parado com reduced-motion).
3. Seções com `h2`: **O problema** · **A solução** · **Decisões técnicas** ·
   **Desafios que resolvi** · **Como eu trabalhei** · **Resultado** · **Próximo passo**.
4. Rodapé da página: card "Quer ver outro projeto?" voltando pra `/#projetos`.

---

## 7. Sobre, Stack e Contato

**Sobre (`#sobre`):** eyebrow `02 — Sobre`. Duas colunas de texto (18 px,
`line-height: 1.6`) + 3 caixas de fatos (rótulo 12 px maiúsculo `texto-mudo`, valor em
negrito) + **linha do tempo** vertical (bolinha `destaque` + ano em Geist Mono + texto).
Espaço reservado pra foto (círculo de 120 px) — só aparece quando existir a foto.
Celular: tudo em 1 coluna.

**Stack (`#stack`):** eyebrow `03 — Stack`. 4 grupos em grade de 4 colunas (2 no
celular). Cada grupo: card com título 14 px maiúsculo `destaque` + chips.

**Contato (`#contato`):** card centralizado, `max-width: 880px`, raio 32 px,
`padding: clamp(36px,6vw,72px) clamp(20px,5vw,64px)`, brilho azul saindo do topo
(`radial-gradient(closest-side, rgba(143,168,255,.32), transparent)`), borda que acende.
De cima pra baixo, centralizado, `gap: 22px`:
1. Selo verde `● Disponível` (bolinha piscando 1,6 s).
2. `h2` `Bora conversar?` — `clamp(44px, 7vw, 88px)` (decodifica, §8.4).
3. Lead (máx. 520 px).
4. Pílula do e-mail: endereço em Geist Mono 15 px (13 px no celular, com reticências se não
   couber) + botão `Copiar` (pílula `#1E2230`, 44 px). Clicou → copia, vira `Copiado ✓`
   em verde por 2 s. Se a Clipboard API não existir, não quebra.
5. Botões: `Enviar e-mail` (igual ao "Ver projetos", com seta pra direita) · `GitHub` ·
   `LinkedIn` (pílulas escuras de 56 px com ícone em círculo `#1E2230`).

---

## 8. Efeitos

Regra geral: **tudo para** com `prefers-reduced-motion: reduce`, e o estado parado é o
estado final visível.

### 8.1 Céu estrelado (fundo da página inteira)
Camada `position: absolute; inset: 0; z-index: 0; pointer-events: none` atrás do conteúdo.
Três camadas de estrelas feitas com vários `radial-gradient` pequenos num bloco que se repete:

| Camada | Bloco | Estrelas por bloco | Tamanho | Animação |
|---|---|---|---|---|
| 1 | 217 × 217 px | 16 | 1 px | sobe 1 bloco em 90 s (`background-position`) |
| 2 | 349 × 349 px | 9 | 1,6 px | sobe 1 bloco em 140 s + pisca 5 s |
| 3 | 523 × 523 px | 6 | 2,2 px | pisca 7 s (atraso 2 s) |

Cor das estrelas `rgba(237,239,243, .5–1)`. "Pisca" = opacidade 1 → .45 → 1.

### 8.2 Estrelas cadentes
Camada `position: fixed; inset: 0` (presas à tela, não à página), atrás do conteúdo.
8 riscos de 1,5 × 120 px (degradê transparente → `rgba(190,205,255,.9)`), girados 35°,
com uma "cabeça" de 5 px brilhante. Cada um com posição, atraso e duração próprios
(9–13 s); só os primeiros **14%** da animação são visíveis
(viaja `-420px, 600px` e some), o resto é pausa — então aparece um de cada vez.

### 8.3 Holofote do mouse + borda que acende
- **Holofote:** brilho `radial-gradient(420px circle at var(--gx) var(--gy),
  rgba(143,168,255,.14), transparent 70%)` na camada do fundo. `--gx/--gy` atualizados no
  `pointermove` da página (só com mouse: `pointerType === 'mouse'`). Sem mouse, fica parado
  perto da busca.
- **Borda que acende** (cards, busca, contato): `::before` com
  `radial-gradient(240px circle at var(--mx) var(--my), rgba(143,168,255,.95), transparent 70%)`
  recortado só na borda (máscara `content-box` + `exclude`) e `::after` com brilho interno
  bem fraco (`.07`). Aparecem no hover (0,25 s).
- Atualizar as variáveis direto no `element.style.setProperty`, **sem `useState`** (não
  re-renderizar a cada movimento do mouse).

### 8.4 Títulos que se decodificam
- `embaralhar(texto, progresso)` → string: as primeiras `floor(progresso × tamanho)` letras
  ficam reais; o resto vira símbolos de `#x@k%&$01<>/*+=?`; espaços continuam espaços.
- Ao 60% visível (`IntersectionObserver`, threshold .6), anima o progresso de 0 a 1 em
  0,75 s (`requestAnimationFrame`), **uma vez só** por título.
- Parte já revelada em `texto`; parte embaralhada em `destaque` e Geist Mono.
- `h2` com `aria-label` do texto real; as partes animadas com `aria-hidden`.
- Reduced-motion ou sem `IntersectionObserver`: texto real direto.

### 8.5 Entrada ao rolar
Classe de entrada: `opacity 0 → 1` e `translateY(28px) → 0`, com
`animation-timeline: view(); animation-range: entry 0% entry 40%`, **dentro de
`@supports (animation-timeline: view())`**. Sem suporte: aparece normal.

### 8.6 Barra de progresso
`position: fixed; top: 0`, 3 px, `destaque` com brilho, `transform-origin: left`,
`scaleX(0 → 1)` com `animation-timeline: scroll(root)` (dentro de `@supports`).

---

## 9. V2 — "Como funciona" (não fazer na v1)
Já desenhado no protótipo: mapa `Navegador → API → Banco` com a bolinha viajando (ida azul,
volta verde, API piscando âmbar `#FBBF24` quando "acordando"), caixa "Teste a API" com
endpoints, log passo a passo e JSON, e luz de status no cabeçalho. Depende da API real.

---

## 10. Responsivo (abaixo de 820 px)
- Links do cabeçalho somem.
- Abertura em 1 coluna; busca embaixo do texto.
- Cards de projeto em 1 coluna; campos da prévia continuam lado a lado.
- Sobre e fatos em 1 coluna; Stack em 2 colunas.
- Contato: raio 24 px, e-mail 13 px.
- Testar em **360, 390, 768 e 1440 px**: nada corta, nenhuma rolagem lateral.
