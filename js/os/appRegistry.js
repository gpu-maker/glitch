import { openFiles } from "../apps/fileExplorer.js";
import { openMonitor } from "../apps/systemMonitor.js";
import { openNotes } from "../apps/notes.js";
import { openMedia } from "../apps/mediaViewer.js";
import { openBrowser } from "../apps/browser.js";
import { openChat } from "../apps/chat.js";

const apps = {};

export function registerApps() {
  apps.files = openFiles;
  apps.monitor = openMonitor;
  apps.notes = openNotes;
  apps.media = openMedia;
  apps.browser = openBrowser;
  apps.chat = openChat;
}

export function launchApp(name) {
  if (apps[name]) apps[name]();
}
