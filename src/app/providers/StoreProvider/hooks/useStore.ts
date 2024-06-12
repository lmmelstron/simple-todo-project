import { useContext } from "react";
import { StoreContext } from "../ui/StoreProvider";
import { TodosStore } from "@widgets/Todos";

export const useStore = (): TodosStore => useContext(StoreContext);
