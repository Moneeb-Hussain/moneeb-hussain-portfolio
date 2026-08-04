import { test, expect } from "@playwright/test";
import { profile } from "../src/content/profile";

test.describe("Smoke", () => {
  test("home loads with headline", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByRole("heading", { level: 1, name: profile.headline }),
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

  test("CV link exists", async ({ page }) => {
    await page.goto("/");
    const cvLink = page.getByRole("link", { name: /download cv/i }).first();
    await expect(cvLink).toHaveAttribute("href", profile.links.cv);
  });
});
