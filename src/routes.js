import Main from "./routes/Main.svelte";
import Result from "./routes/Result.svelte";
import PageNotFound from "./routes/PageNotFound.svelte";

const routes = {
  "/": Main,
  "/summoner/:username": Result,
  "*": PageNotFound,
};

export default routes;
