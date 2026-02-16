import { expect, test } from "@playwright/test";

test("renders animated devops infinity scene", async ({ page }) => {
  await page.goto("/");

  const scene = page.getByRole("img", {
    name: "DevOps infinity collage with automation tools inside hexagonal cells",
  });

  await expect(scene).toBeVisible();
  await expect(scene.locator("line")).toHaveCount(8);
  await expect(scene.locator("animate")).toHaveCount(1);
});
