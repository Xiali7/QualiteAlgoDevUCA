// playwright.config.js
const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
    testDir: "./tests/e2e",
    timeout: 30000,
    expect: {
        timeout: 5000
    },
    use: {
        browserName: "chromium",
        headless: false, // Mettre à true pour exécuter les tests en mode headless
        launchOptions: {
            slowMo: 50 // Pour ralentir l'exécution des tests, utile pour le débogage
        }
    }
});
