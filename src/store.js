import { readable } from "svelte/store";
import Data from "./data";

export let users = readable(Data, (set) => {
  set(Data);
});
