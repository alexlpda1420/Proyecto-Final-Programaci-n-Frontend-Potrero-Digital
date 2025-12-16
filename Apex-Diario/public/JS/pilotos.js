const teamFilter = document.getElementById("teamFilter");
const pilotSearch = document.getElementById("pilotSearch");
const pilotsGrid = document.getElementById("pilotsGrid");
const pilotCount = document.getElementById("pilotCount");

function applyFilters() {
  const teamValue = teamFilter.value.trim().toLowerCase();
  const query = pilotSearch.value.trim().toLowerCase();

  const cards = pilotsGrid.querySelectorAll(".profile-card");
  let visible = 0;

  cards.forEach(card => {
    const team = (card.dataset.team || "").toLowerCase();
    const name = (card.dataset.name || "").toLowerCase();

    const matchTeam = teamValue === "all" || team === teamValue;
    const matchSearch = query === "" || name.includes(query);

    const show = matchTeam && matchSearch;
    card.style.display = show ? "" : "none";
    if (show) visible++;
  });

  pilotCount.textContent = `Mostrando: ${visible}`;
}

teamFilter.addEventListener("change", applyFilters);
pilotSearch.addEventListener("input", applyFilters);

applyFilters();
