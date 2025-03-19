import { describe, expect, test } from "@jest/globals";
import { validateValue } from "./ValidateValue";

// _
describe("Валидация значения", () => {
  // до запуска
  // ~ используеться для предварительного наполнения данными и вызывается перед каждым тестом
  let mockdata;
  beforeEach(() => {
    mockdata = Math.random();
    // case1:
    /**
     * Здесь однократно создали в БД какие то записи
     */
  });

  // ~ Вызывается однократно перед всеми тестами
  beforeEach(() => {
    // case2:
    /**
     *
     */
  });

  // Список тестов
  test("В пределах 0-100", () => {
    expect(validateValue(50)).toBe(true);
  });
  test("Граница 0", () => {
    expect(validateValue(0)).toBe(true);
  });
  test("Граница 100", () => {
    expect(validateValue(100)).toBe(true);
  });
  test("За пределом значений", () => {
    expect(validateValue(-1000)).toBe(false);
  });

  // ~ Запуск после каждого теста
  afterEach(() => {
    mockdata = null;
    // case1:
    /**
     * Здесь однократно удалили в БД созданные изначально записи
     */
  });

  // ~ Вызывается однократно после всех тестами
  afterAll(() => {});
});
