import { test, expect } from "@playwright/test";

test("Création, modification et vérification d'un article", async ({ page }) => {
    // Aller à la page de création de l'article
    await page.goto("http://localhost:3009/posts/new");

    // Remplir le formulaire pour créer un nouvel article
    await page.fill('input[name="title"]', "Mon premier article");
    await page.fill('textarea[name="content"]', "Ceci est le contenu de mon premier article.");
    await page.fill('input[name="author"]', "Auteur Test");

    await page.click('button[type="submit"]');

    // Redirection vers la liste des articles
    await page.goto("http://localhost:3009/posts");

    // Vérification que l'article créé est présent dans la liste des articles
    const articleTitle = await page.locator('a:has-text("Mon premier article")').first();
    await expect(articleTitle).toBeVisible();

    // Récupérer l'ID de l'article nouvellement créé
    const articleLink = await page.locator('a:has-text("Mon premier article")').first();
    const articleUrl = await articleLink.getAttribute("href");
    const articleId = articleUrl?.match(/\/posts\/(\d+)/)?.[1]; // Recuperer id

    if (!articleId) {
        throw new Error("L'ID de l'article n'a pas pu être récupéré.");
    }

    // Rediriger vers la page d'édition de l'article en utilisant l'ID
    await page.goto(`http://localhost:3009/posts/${articleId}/edit`);

    // Modifier le titre et le contenu de l'article
    await page.fill('input[name="title"]', "Mon premier article modifié");
    await page.fill('textarea[name="content"]', "Ceci est le contenu modifié de mon premier article.");
    await page.fill('input[name="author"]', "Auteur Modifié");

    await page.click('button[type="submit"]');

    // Redirection vers la liste d'articles
    await page.goto("http://localhost:3009/posts");

    // Verification présence de l'article modifié
    const modifiedArticleTitle = await page.locator('a:has-text("Mon premier article modifié")').first();
    await expect(modifiedArticleTitle).toBeVisible();
});
