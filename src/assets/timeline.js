// Cole's Capital Group — pipeline project timeline (Gantt-style chart).
const tlAxisEl = document.getElementById('tlAxis');
const tlRowsEl = document.getElementById('tlRows');

if (tlAxisEl && tlRowsEl) {
  // Dates are "YYYY-MM". The end month is included.
  // type: "approval", "build", or "tentative" (build year, exact months TBD)
  const projects = [
    { name: "1615 Route 9", note: "In progress, complete spring 2027",
      phases: [{ type: "build", start: "2026-11", end: "2027-04" }] },
    { name: "1529 Central Ave", note: "2026 approvals, build spring to end of summer 2027",
      phases: [{ type: "approval", start: "2026-11", end: "2026-12" },
               { type: "build", start: "2027-04", end: "2027-08" }] },
    { name: "25 Hudson Ave", note: "Start spring/summer, complete end of summer 2027",
      phases: [{ type: "build", start: "2027-04", end: "2027-08" }] },
    { name: "2377 Malta", note: "Approvals by end of 2026, build 2027",
      phases: [{ type: "approval", start: "2026-11", end: "2026-12" },
               { type: "tentative", start: "2027-01", end: "2027-12" }] },
    { name: "1300 Route 9", note: "2027 approvals",
      phases: [{ type: "tentative", start: "2027-01", end: "2027-12" }] },
    { name: "Cole's Collision Queensbury", note: "2027 approvals",
      phases: [{ type: "tentative", start: "2027-01", end: "2027-12" }] },
    { name: "Cole's Amsterdam", note: "0 Maple Avenue (Route 30) — 2027 approvals",
      phases: [{ type: "tentative", start: "2027-01", end: "2027-12" }] },
    { name: "Cole's Ballston Spa", note: "2027 approvals",
      phases: [{ type: "tentative", start: "2027-01", end: "2027-12" }] },
    { name: "1867 Route 9 Industrial Park", note: "Application early 2027, ~18-month approvals",
      phases: [{ type: "approval", start: "2027-02", end: "2028-07" }] },
  ];

  const toM = (s) => { const [y, m] = s.split('-').map(Number); return y * 12 + (m - 1); };
  const all = projects.flatMap((p) => p.phases);
  const min = Math.min(...all.map((ph) => toM(ph.start)));
  const max = Math.max(...all.map((ph) => toM(ph.end))) + 1;
  const span = max - min;
  const pct = (m) => ((m - min) / span) * 100 + '%';

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let axis = '';
  for (let m = min; m < max; m++) {
    if (m % 6 === 0) axis += `<span style="left:${pct(m)}">${months[m % 12]} '${String(Math.floor(m / 12)).slice(2)}</span>`;
  }
  tlAxisEl.innerHTML = axis;

  const now = new Date();
  const todayM = now.getFullYear() * 12 + now.getMonth() + (now.getDate() - 1) / 30;
  const todayLine = todayM >= min && todayM <= max ? `<div class="tl-today-line" style="left:${pct(todayM)}"></div>` : '';

  tlRowsEl.innerHTML = projects.map((p) => `
    <div class="tl-row">
      <div><div class="tl-name">${p.name}</div><div class="tl-note">${p.note}</div></div>
      <div class="tl-track">
        ${p.phases.map((ph) => {
          const s = toM(ph.start), e = toM(ph.end) + 1;
          return `<div class="tl-bar tl-${ph.type}" style="left:${pct(s)};width:${pct(min + e - s)}"></div>`;
        }).join('')}
        ${todayLine}
      </div>
    </div>`).join('');
}
