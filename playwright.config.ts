import { defineConfig } from "@playwright/test";

export default defineConfig({
    testDir: "./tests/e2e", // Chemin où sont stockés les tests
    use: {
        baseURL: "http://localhost:3009", // Remplace par l'URL correcte
        browserName: "chromium",
        headless: true // Passe à false si tu veux voir le navigateur s'ouvrir
    }
});
