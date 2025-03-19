import { delay } from "./delay";
import { describe, expect, test } from "@jest/globals";

describe("Асинхронный тест", () => {
  test("100 через секунду", async () => {
    const sum = await delay(() => 50 + 50, 1000);
    expect(sum).toBe(100);
  });
});
