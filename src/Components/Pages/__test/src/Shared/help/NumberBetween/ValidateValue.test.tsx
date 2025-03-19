import { describe, expect, test } from "@jest/globals";
import { validateValue } from "./ValidateValue";

// _
test("Валидация значения", () => {
  expect(validateValue(50)).toBe(true);
});
