export function createWindow(title, content) {
  const win = document.createElement("div");
  win.className = "window";
  win.innerHTML = `<strong>${title}</strong><hr>`;
  win.appendChild(content);

  document.getElementById("windows").appendChild(win);
}
