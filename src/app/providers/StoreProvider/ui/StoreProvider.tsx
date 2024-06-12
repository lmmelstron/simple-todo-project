import { TodosStore } from "@widgets/Todos";
import { createContext } from "react";

export const StoreContext = createContext<TodosStore>({} as TodosStore);
export const StoreProvider = StoreContext.Provider;
