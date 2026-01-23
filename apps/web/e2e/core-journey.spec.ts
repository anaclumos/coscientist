import { expect, test } from "@playwright/test"

test.describe("E2E Setup Verification", () => {
  test("playwright can navigate to external site", async ({ page }) => {
    await page.goto("https://example.com")

    await expect(page.locator("h1")).toContainText("Example Domain")
  })
})

test.describe("Application Routes - Requires Running App", () => {
  test("home page loads successfully", async ({ page }) => {
    const response = await page.goto("/en")

    expect(response?.status()).toBeLessThan(500)
    await expect(page.locator("body")).toBeVisible()
  })

  test("manifesto page loads successfully", async ({ page }) => {
    const response = await page.goto("/en/manifesto")

    expect(response?.status()).toBeLessThan(500)
    await expect(page.locator("body")).toBeVisible()
  })

  test("workspace page responds", async ({ page }) => {
    const response = await page.goto("/en/workspace")

    expect(response?.status()).toBeLessThan(500)
    await expect(page.locator("body")).toBeVisible()
  })

  test("verify page responds", async ({ page }) => {
    const response = await page.goto("/en/verify")

    expect(response?.status()).toBeLessThan(500)
    await expect(page.locator("body")).toBeVisible()
  })

  test("search page responds", async ({ page }) => {
    const response = await page.goto("/en/search")

    expect(response?.status()).toBeLessThan(500)
    await expect(page.locator("body")).toBeVisible()
  })

  test("navigation between pages works", async ({ page }) => {
    await page.goto("/en")

    await page.waitForLoadState("networkidle")

    const initialUrl = page.url()
    expect(initialUrl).toContain("/en")

    await page.goto("/en/manifesto")
    await page.waitForLoadState("networkidle")

    const manifestoUrl = page.url()
    expect(manifestoUrl).toContain("/manifesto")
  })
})
