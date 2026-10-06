import { defineConfig, devices } from "@playwright/test";

const PORTA = 4173;

export default defineConfig({
  testDir: "./e2e",

  use: {
    // TODO 2: endereço base do site durante os testes. Com ele, o teste pode escrever
    //         só page.goto("/"). Monte com "http://localhost:" + a constante PORTA.
    baseURL: `http://localhost:${PORTA}`,
  },

  projects: [
    // Um "projeto" = um navegador. Por enquanto só o Chromium.
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
  ],

  webServer: {
    // TODO 3: comando que serve uma pasta na porta escolhida.
    //         Formato do serve: npx serve <pasta> -l <porta>
    //         Qual pasta o build da task 1 gera?
    command: `npx serve out -l ${PORTA}`,

    // Endereço que o Playwright fica consultando até o servidor responder.
    url: `http://localhost:${PORTA}`,

    // Na sua máquina, reaproveita o servidor se ele já estiver ligado. No CI, sempre liga um novo.
    reuseExistingServer: !process.env.CI,
  },
});
