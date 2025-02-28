import { test, expect } from "@playwright/test";

test("Page d'accueil - Vérification des éléments", async ({ page }) => {
    await page.goto("http://localhost:3009"); // Modifiez l'URL selon votre projet

    // Présence du titre et son contenu
    const title = await page.locator("h1");
    await expect(title).toBeVisible();
    await expect(title).toHaveText("Bienvenue sur Super Blog");

    // Présence du lien vers la liste des articles
    const articlesLink = await page.locator('a[href="/posts"]');
    await expect(articlesLink).toBeVisible();
});
