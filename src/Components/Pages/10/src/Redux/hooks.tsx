import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "./store";

// Кастомный useDispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
// Кастомный useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
