import { test, expect } from "@playwright/test";

test("a página inicial abre", async ({ page }) => {
  const resposta = await page.goto("/");

  expect(resposta?.ok()).toBe(true);

  await expect(page.locator("body")).toBeVisible();
});
