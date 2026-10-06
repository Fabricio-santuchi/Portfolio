import { test, expect } from "@playwright/test";

test("a página inicial abre", async ({ page }) => {
  // TODO 1: navegue até a raiz do site. O método do "page" que abre um endereço
  //         se chama "ir para", em inglês. O baseURL do config completa o resto.
  const resposta = await page.goto("/");

  // TODO 2: resposta.ok() devolve verdadeiro quando o servidor respondeu com sucesso
  //         (status 200 a 299). Qual valor você espera aqui?
  expect(resposta?.ok()).toBe(true);

  await expect(page.locator("body")).toBeVisible();
});
