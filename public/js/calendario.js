const MAP_BASE =
  "https://media.formula1.com/image/upload/c_fit,h_704,q_auto/v1740000000/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/";

// 2025 Calendar (rondas + rangos de fechas) y fichas de circuito (length/laps/distance/firstGP)
const GPs = [
  { round: 1,  gp: "Australia",     date: "14 - 16 Mar", city: "Melbourne", circuit: "Albert Park", map: "Australia_Circuit.webp", length: "5.278km", laps: 58, distance: "306.124km", firstGP: 1996 },
  { round: 2,  gp: "China",         date: "21 - 23 Mar", city: "Shanghai",  circuit: "Shanghai International Circuit", map: "China_Circuit.webp", length: "5.451km", laps: 56, distance: "305.066km", firstGP: 2004 },
  { round: 3,  gp: "Japón",         date: "04 - 06 Apr", city: "Suzuka",    circuit: "Suzuka Circuit", map: "Japan_Circuit.webp", length: "5.807km", laps: 53, distance: "307.471km", firstGP: 1987 },
  { round: 4,  gp: "Bahréin",       date: "11 - 13 Apr", city: "Sakhir",    circuit: "Bahrain International Circuit", map: "Bahrain_Circuit.webp", length: "5.412km", laps: 57, distance: "308.238km", firstGP: 2004 },
  { round: 5,  gp: "Arabia Saudita",date: "18 - 20 Apr", city: "Jeddah",    circuit: "Jeddah Corniche Circuit", map: "Saudi_Arabia_Circuit.webp", length: "6.174km", laps: 50, distance: "308.45km", firstGP: 2021 },
  { round: 6,  gp: "Miami",         date: "02 - 04 May", city: "Miami",     circuit: "Miami International Autodrome", map: "Miami_Circuit.webp", length: "5.412km", laps: 57, distance: "308.326km", firstGP: 2022 },
  { round: 7,  gp: "Emilia-Romaña", date: "16 - 18 May", city: "Imola",     circuit: "Autodromo Enzo e Dino Ferrari", map: "Emilia_Romagna_Circuit.webp", length: "4.909km", laps: 63, distance: "309.049km", firstGP: 1980 },
  { round: 8,  gp: "Mónaco",        date: "23 - 25 May", city: "Monte Carlo", circuit: "Circuit de Monaco", map: "Monaco_Circuit.webp", length: "3.337km", laps: 78, distance: "260.286km", firstGP: 1950 },
  { round: 9,  gp: "España",        date: "30 May - 01 Jun", city: "Barcelona", circuit: "Circuit de Barcelona-Catalunya", map: "Spain_Circuit.webp", length: "4.657km", laps: 66, distance: "307.236km", firstGP: 1991 },
  { round: 10, gp: "Canadá",        date: "13 - 15 Jun", city: "Montreal",  circuit: "Circuit Gilles-Villeneuve", map: "Canada_Circuit.webp", length: "4.361km", laps: 70, distance: "305.27km", firstGP: 1978 },
  { round: 11, gp: "Austria",       date: "27 - 29 Jun", city: "Spielberg", circuit: "Red Bull Ring", map: "Austria_Circuit.webp", length: "4.318km", laps: 71, distance: "306.452km", firstGP: 1970 },
  { round: 12, gp: "Gran Bretaña",  date: "04 - 06 Jul", city: "Silverstone", circuit: "Silverstone Circuit", map: "Great_Britain_Circuit.webp", length: "5.891km", laps: 52, distance: "306.198km", firstGP: 1950 },
  { round: 13, gp: "Bélgica",       date: "25 - 27 Jul", city: "Spa",       circuit: "Circuit de Spa-Francorchamps", map: "Belgium_Circuit.webp", length: "7.004km", laps: 44, distance: "308.052km", firstGP: 1950 },
  { round: 14, gp: "Hungría",       date: "01 - 03 Aug", city: "Budapest",  circuit: "Hungaroring", map: "Hungary_Circuit.webp", length: "4.381km", laps: 70, distance: "306.63km", firstGP: 1986 },
  { round: 15, gp: "Países Bajos",  date: "29 - 31 Aug", city: "Zandvoort", circuit: "Circuit Zandvoort", map: "Netherlands_Circuit.webp", length: "4.259km", laps: 72, distance: "306.648km", firstGP: 1952 },
  { round: 16, gp: "Italia",        date: "05 - 07 Sep", city: "Monza",     circuit: "Autodromo Nazionale Monza", map: "Italy_Circuit.webp", length: "5.793km", laps: 53, distance: "306.72km", firstGP: 1950 },
  { round: 17, gp: "Azerbaiyán",    date: "19 - 21 Sep", city: "Baku",      circuit: "Baku City Circuit", map: "Baku_Circuit.webp", length: "6.003km", laps: 51, distance: "306.049km", firstGP: 2016 },
  { round: 18, gp: "Singapur",      date: "03 - 05 Oct", city: "Singapore", circuit: "Marina Bay Street Circuit", map: "Singapore_Circuit.webp", length: "4.927km", laps: 62, distance: "305.337km", firstGP: 2008 },
  { round: 19, gp: "Estados Unidos",date: "17 - 19 Oct", city: "Austin",    circuit: "Circuit of the Americas", map: "USA_Circuit.webp", length: "5.513km", laps: 56, distance: "308.405km", firstGP: 2012 },
  { round: 20, gp: "México",        date: "24 - 26 Oct", city: "Ciudad de México", circuit: "Autódromo Hermanos Rodríguez", map: "Mexico_Circuit.webp", length: "4.304km", laps: 71, distance: "305.354km", firstGP: 1963 },
  { round: 21, gp: "Brasil",        date: "07 - 09 Nov", city: "São Paulo", circuit: "Interlagos (José Carlos Pace)", map: "Brazil_Circuit.webp", length: "4.309km", laps: 71, distance: "305.879km", firstGP: 1973 },
  { round: 22, gp: "Las Vegas",     date: "20 - 22 Nov", city: "Las Vegas", circuit: "Las Vegas Strip Circuit", map: "Las_Vegas_Circuit.webp", length: "6.201km", laps: 50, distance: "309.958km", firstGP: 2023 },
  { round: 23, gp: "Qatar",         date: "28 - 30 Nov", city: "Lusail",    circuit: "Lusail International Circuit", map: "Qatar_Circuit.webp", length: "5.419km", laps: 57, distance: "308.611km", firstGP: 2021 },
  { round: 24, gp: "Abu Dhabi",     date: "05 - 07 Dec", city: "Yas Island", circuit: "Yas Marina Circuit", map: "Abu_Dhabi_Circuit.webp", length: "5.281km", laps: 58, distance: "306.183km", firstGP: 2009 },
];

const elList = document.getElementById("calendarList");
const elTitle = document.getElementById("gpTitle");
const elSubtitle = document.getElementById("gpSubtitle");
const elRound = document.getElementById("gpRound");
const elMap = document.getElementById("gpMap");
const elStats = document.getElementById("gpStats");
const elSearch = document.getElementById("calendarSearch");

let activeRound = 1;

function renderList(items) {
  elList.innerHTML = "";

  items.forEach((item) => {
    const a = document.createElement("button");
    a.type = "button";
    a.className = `list-group-item list-group-item-action calendar-item ${item.round === activeRound ? "active" : ""}`;
    a.dataset.round = item.round;

    a.innerHTML = `
      <div class="d-flex justify-content-between align-items-start gap-2">
        <div class="pe-2">
          <div class="fw-semibold">R${item.round} · ${item.gp}</div>
          <div class="small">${item.city} · ${item.circuit}</div>
        </div>
        <div class="text-end">
          <div class="badge badge-outline">${item.date}</div>
        </div>
      </div>
    `;

    a.addEventListener("click", () => {
      activeRound = item.round;
      setActive(item);
      [...elList.querySelectorAll(".calendar-item")].forEach((x) => x.classList.remove("active"));
      a.classList.add("active");
    });

    elList.appendChild(a);
  });
}

function setActive(item) {
  elTitle.textContent = `GP de ${item.gp}`;
  elSubtitle.textContent = `${item.date} · ${item.city}`;
  elRound.textContent = `R${item.round}`;

  elMap.src = MAP_BASE + item.map;
  elMap.alt = `Mapa del circuito - ${item.circuit}`;

  elStats.innerHTML = `
    <li><strong>Circuito:</strong> ${item.circuit}</li>
    <li><strong>Longitud:</strong> ${item.length}</li>
    <li><strong>Vueltas:</strong> ${item.laps}</li>
    <li><strong>Distancia:</strong> ${item.distance}</li>
    <li><strong>Primer GP:</strong> ${item.firstGP}</li>
  `;
}

function applySearch() {
  const q = elSearch.value.trim().toLowerCase();
  const filtered = !q
    ? GPs
    : GPs.filter((x) =>
        `${x.gp} ${x.city} ${x.circuit}`.toLowerCase().includes(q)
      );
  renderList(filtered);

  // Si el filtro “deja afuera” la ronda activa, mostramos la primera del filtro
  if (filtered.length && !filtered.some((x) => x.round === activeRound)) {
    activeRound = filtered[0].round;
    setActive(filtered[0]);
    const firstBtn = elList.querySelector(".calendar-item");
    if (firstBtn) firstBtn.classList.add("active");
  }
}

// Init
renderList(GPs);
setActive(GPs[0]);

elSearch.addEventListener("input", applySearch);
