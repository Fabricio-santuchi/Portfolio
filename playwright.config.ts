import { defineConfig, devices } from "@playwright/test";

const PORTA = 4173;

export default defineConfig({
  testDir: "./e2e",

  use: {
    baseURL: `http://localhost:${PORTA}`,
  },

  projects: [
    // Um "projeto" = um navegador. Por enquanto só o Chromium.
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
  ],

  webServer: {
    command: `npx serve out -l ${PORTA}`,

    // Endereço que o Playwright fica consultando até o servidor responder.
    url: `http://localhost:${PORTA}`,

    // Na sua máquina, reaproveita o servidor se ele já estiver ligado. No CI, sempre liga um novo.
    reuseExistingServer: !process.env.CI,
  },
});
