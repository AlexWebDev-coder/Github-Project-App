import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import store from "../../store/store";
import { rootReducer } from "../../store/rootReducer";

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
