export function bootSequence(done) {
  const boot = document.getElementById("boot");

  const lines = [
    "UNITED STATES GOVERNMENT SYSTEM",
    "CLASSIFIED TERMINAL",
    "Unauthorized access prohibited.",
    "Monitoring enabled.",
    "Booting system..."
  ];

  let i = 0;

  const interval = setInterval(() => {
    if (i >= lines.length) {
      clearInterval(interval);
      setTimeout(done, 500);
      return;
    }

    boot.innerHTML += lines[i] + "<br>";
    i++;
  }, 500);
}
