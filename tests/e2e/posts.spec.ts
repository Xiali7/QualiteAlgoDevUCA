import { test, expect } from "@playwright/test";

test("Page liste des articles - Vérification des éléments", async ({ page }) => {
    await page.goto("http://localhost:3009/posts"); // Modifie l'URL si nécessaire

    // Présence et contenu du titre
    const title = await page.locator("h1");
    await expect(title).toBeVisible();
    await expect(title).toHaveText("Liste des articles");

    // Lien "Nouvel article"
    const newArticleLink = await page.locator('a[href="/posts/new"]:has-text("Nouvel article")');
    await expect(newArticleLink).toBeVisible();
});

test("Page liste des articles - Vérifier le fonctionnement du lien Nouvel article", async ({ page }) => {
    await page.goto("http://localhost:3009/posts");

    // Redirection vers la page de création
    const newArticleLink = await page.locator('a[href="/posts/new"]:has-text("Nouvel article")');
    await newArticleLink.click();
    await expect(page).toHaveURL("http://localhost:3009/posts/new");
});
