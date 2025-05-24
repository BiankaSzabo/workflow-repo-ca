import { test, expect } from "@playwright/test";

test.describe("navigation", () => {
  test("Navigate to venue details page", async ({ page }) => {
    await page.goto("/index.html");
    await page.waitForLoadState("networkidle");
    await page.waitForSelector('a[href^="/venue/?id="]');
    const firstCard = page.locator('a[href^="/venue/?id="]').first();
    await firstCard.click();
    await expect(page.url()).toContain("/venue/?id=");
    const heading = page.locator("h1").first();
    await expect(heading).toContainText("Venue details");
  });
});
