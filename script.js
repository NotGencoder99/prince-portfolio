const chainData = [
  [1.24, 4.8, 182.40, 24700, 76.85, -2.4, 0.89],
  [1.86, 8.2, 148.65, 24750, 92.30, 4.1, 1.12],
  [2.41, 24.6, 118.20, 24800, 114.55, 12.8, 1.94],
  [1.78, -3.6, 91.45, 24850, 142.80, 18.3, 2.36],
  [1.32, -8.4, 68.90, 24900, 176.40, 9.7, 2.18],
  [0.98, -5.1, 51.35, 24950, 213.80, 5.8, 1.54],
  [0.74, -12.2, 38.20, 25000, 258.25, -3.4, 1.21]
];

const body = document.getElementById("chainBody");

function renderChain() {
  body.innerHTML = chainData.map((r, i) => `
    <tr>
      <td>${r[0].toFixed(2)}M</td>
      <td class="${r[1] >= 0 ? "positive" : "negative"}">${r[1] > 0 ? "+" : ""}${r[1]}%</td>
      <td>₹${r[2].toFixed(2)}</td>
      <td class="strike ${i === 2 ? "atm" : ""}">${r[3]}</td>
      <td>₹${r[4].toFixed(2)}</td>
      <td class="${r[5] >= 0 ? "positive" : "negative"}">${r[5] > 0 ? "+" : ""}${r[5]}%</td>
      <td>${r[6].toFixed(2)}M</td>
    </tr>
  `).join("");
}
renderChain();

document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    const name = tab.dataset.index;
    document.querySelector(".market-status").textContent = `● ${name} preview`;
  });
});

document.querySelectorAll(".filter").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

document.getElementById("themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const dark = document.body.classList.contains("dark");
  document.getElementById("themeBtn").textContent = dark ? "☾" : "☼";
});
