import { test, expect } from "@playwright/test";
import { handoffProfile } from "../src/content/handoff";
import { profile } from "../src/content/profile";

test.describe("Smoke", () => {
  test("home loads with name heading", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByRole("heading", { level: 1, name: handoffProfile.name }),
    ).toBeVisible();
  });

  for (const path of [
    "/projects",
    "/research",
    "/experience",
    "/achievements",
    "/about",
    "/contact",
  ]) {
    test(`${path} loads`, async ({ page }) => {
      const response = await page.goto(path);
      expect(response?.ok()).toBeTruthy();
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    });
  }

  test("project case study loads", async ({ page }) => {
    const response = await page.goto("/projects/automatic-retail-checkout");
    expect(response?.ok()).toBeTruthy();
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("retail checkout handoff case study loads", async ({ page }) => {
    const response = await page.goto("/retail-checkout");
    expect(response?.ok()).toBeTruthy();
    await expect(
      page.getByRole("heading", { level: 1, name: "Automatic Retail Checkout V-3" }),
    ).toBeVisible();
  });

  test("résumé link exists", async ({ page }) => {
    await page.goto("/");
    const resumeLink = page.getByRole("link", { name: /résumé/i }).first();
    await expect(resumeLink).toHaveAttribute("href", handoffProfile.resumeHref);
  });

  test("existing pages still expose CV download", async ({ page }) => {
    await page.goto("/about");
    const cvLink = page.getByRole("link", { name: /download cv/i }).first();
    await expect(cvLink).toHaveAttribute("href", profile.links.cv);
  });
});
