import { test, expect, type Page } from "@playwright/test";

/**
 * Loads every route in the static export and asserts the page renders its
 * content with zero console errors from the site itself - this catches
 * runtime-only issues (hydration mismatches, missing assets) that
 * tsc/eslint/next build can't see.
 *
 * Errors from third-party origins (Google Fonts, the Slack button image,
 * the TermsFeed iframe on /tos) are ignored so the test doesn't depend on
 * external services.
 */
const routes = [
  { path: "/", expectText: "Lunch Buddies 🥙" },
  { path: "/how_it_works", expectText: "Getting Started" },
  { path: "/pricing", expectText: "Lunch Buddies is free" },
  { path: "/registration", expectText: "Registration Complete!" },
  { path: "/tos", expectText: "Terms of Service" },
];

function isFirstParty(url: string | undefined, baseURL: string): boolean {
  return !url || url.startsWith(baseURL);
}

function collectConsoleErrors(page: Page, baseURL: string): string[] {
  const errors: string[] = [];

  page.on("console", (message) => {
    if (
      message.type() === "error" &&
      isFirstParty(message.location().url, baseURL)
    ) {
      errors.push(message.text());
    }
  });

  page.on("pageerror", (error) => {
    errors.push(error.message);
  });

  return errors;
}

for (const { path, expectText } of routes) {
  test(`${path} renders with no console errors`, async ({ page, baseURL }) => {
    const errors = collectConsoleErrors(page, baseURL ?? "");

    await page.goto(path);
    await page.waitForLoadState("load");

    await expect(page.getByText(expectText, { exact: true })).toBeVisible();
    expect(errors).toEqual([]);
  });
}
