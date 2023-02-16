import Copy from "./lib/Copy.svelte";
import Paste from "./lib/Paste.svelte";
import NotFound from "./lib/Paste.svelte";

export const routes = {
  // Exact path
  "/": Paste,

  // Using named parameters, with last being optional
  "/cpy/:key": Copy,

  // // Wildcard parameter
  // '/book/*': Book,

  // Catch-all
  // This is optional, but if present it must be the last
  "*": NotFound,
};
