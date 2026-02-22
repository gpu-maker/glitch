import { initClock } from "./systemClock.js";
import { registerApps, launchApp } from "./appRegistry.js";
import { initEntity } from "../entity/entityEngine.js";

export function initOS() {
  initClock();
  registerApps();
  initEntity();

  const input = document.getElementById("commandInput");
  input.addEventListener("keydown", e => {
    if (e.key === "Enter") {
      handleCommand(input.value);
      input.value = "";
    }
  });
}

function print(text) {
  document.getElementById("output").innerHTML += text + "<br>";
}

function handleCommand(cmd) {
  print("> " + cmd);

  const parts = cmd.split(" ");

  if (cmd === "help") {
    print("help, apps, open <app>");
  } else if (cmd === "apps") {
    print("files, monitor, notes, media, browser, chat");
  } else if (parts[0] === "open") {
    launchApp(parts[1]);
  } else {
    print("unknown command");
  }
}
