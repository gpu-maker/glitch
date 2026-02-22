import { bootSequence } from "./os/boot.js";
import { initOS } from "./os/osEngine.js";

bootSequence(() => {
  document.getElementById("boot").remove();
  document.getElementById("desktop").classList.remove("hidden");
  initOS();
});
