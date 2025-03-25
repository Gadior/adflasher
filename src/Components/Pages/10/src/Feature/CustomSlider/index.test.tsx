import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CustomSlider from "./CustomSlider";
import userEvent from "@testing-library/user-event";

// Мокаем ReviewCard
jest.mock("../../Entities", () => ({
  ReviewCard: ({ slide }: { slide: any }) => (
    <article data-testid="review-card">
      <h3>{slide.name}</h3>
      <p>{slide.description}</p>
      <span>Rating: {slide.rate}</span>
    </article>
  ),
}));

const reviewCardsData = [
  { id: 1, name: "Card 1", description: "Description 1", rate: 5 },
  { id: 2, name: "Card 2", description: "Description 2", rate: 4 },
  { id: 3, name: "Card 3", description: "Description 3", rate: 2 },
  { id: 4, name: "Card 4", description: "Description 4", rate: 1 },
  { id: 5, name: "Card 5", description: "Description 5", rate: 1 },
];

// Мок стрелок управления
jest.mock("lucide-react", () => ({
  MoveLeft: () => <span>←</span>,
  MoveRight: () => <span>→</span>,
}));

// _
test("Рендер CustomSlider", () => {
  render(<CustomSlider slides={reviewCardsData} />);
  expect(screen.getByTestId("CustomSlider")).toBeInTheDocument();
});

test("Количество слайдов совпадает количеству слайдов в моке", () => {
  render(<CustomSlider slides={reviewCardsData} />);
  const slides = screen.getAllByRole("article");
  expect(slides).toHaveLength(reviewCardsData.length);
});

test("Первый слайд активен, второй neighbor, а третий hidden", () => {
  render(<CustomSlider slides={reviewCardsData} />);
  expect(screen.getByTestId("slide-0")).toHaveAttribute(
    "data-position",
    "active"
  );
  expect(screen.getByTestId("slide-1")).toHaveAttribute(
    "data-position",
    "neighbor"
  );
  expect(screen.getByTestId("slide-2")).toHaveAttribute(
    "data-position",
    "hidden"
  );
});

test("Кнопка далее работает", async () => {
  render(<CustomSlider slides={reviewCardsData} />);

  console.log(
    "btn_NEXT",
    screen.getByTestId("slider-next").getAttribute("data-testid")
  );

  const nextButton = screen.getByTestId("slider-next");
  await userEvent.click(nextButton);

  // Проверяем новое состояние
  expect(screen.getByTestId("slide-4")).toHaveAttribute(
    "data-position",
    "active"
  );
  expect(screen.getByTestId("slide-0")).toHaveAttribute(
    "data-position",
    "neighbor"
  );
});

test("Кнопка назад работает", async () => {
  render(<CustomSlider slides={reviewCardsData} />);

  const prevButton = screen.getByTestId("slider-next");
  await userEvent.click(prevButton);

  // Проверяем новое состояние
  expect(screen.getByTestId("slide-4")).toHaveAttribute(
    "data-position",
    "active"
  );
  expect(screen.getByTestId("slide-0")).toHaveAttribute(
    "data-position",
    "neighbor"
  );
});
