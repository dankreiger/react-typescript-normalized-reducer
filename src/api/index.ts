import axios from "axios";
import { Filter, EFilter } from "../components/FilterLink";
import { ITodo } from "../redux/todos";

export const fetchTodos = async (filter: Filter) => {
  const response = await axios.get("http://localhost:4000/todos");
  const data: ITodo[] = await response.data;
  switch (filter) {
    case EFilter.ALL:
      return data;
    case EFilter.ACTIVE:
      return data.filter(t => !t.completed);
    case EFilter.COMPLETED:
      return data.filter(t => t.completed);
    default:
      return data;
  }
};
