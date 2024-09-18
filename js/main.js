let currentRoundIndex = 0;
let roundsData = [];

const loadingElement = document.getElementById('loading');
const gamesListElement = document.getElementById('games-list');
const roundNumberSpan = document.getElementById('round-number');
const prevRoundButton = document.getElementById('prev-round');
const nextRoundButton = document.getElementById('next-round');

async function fetchRounds() {
  try {
    toggleLoading(true);
    const response = await fetch('https://sevn-pleno-esportes.deno.dev/');
    if (!response.ok) throw new Error('Erro ao buscar dados');
    roundsData = await response.json();
    toggleLoading(false);
    renderRound(currentRoundIndex); 
  } catch (error) {
    console.error('Erro ao buscar dados da API:', error);
    loadingElement.textContent = 'Erro ao carregar os dados! Tente novamente.';
  }
}

function renderRound(roundIndex) {
  const round = roundsData[roundIndex];
  roundNumberSpan.textContent = `RODADA ${round.round}`;
  gamesListElement.innerHTML = round.games.map(game => `
    <div class="game-item">
      <div class="team team-left">
        <img src="img/team_shield_${game.team_home_id.split('-')[1]}.svg" alt="Escudo ${game.team_home_name}">
        <span>${game.team_home_name}</span>
      </div>
      <div class="score">
        <span>${game.team_home_score}</span> <img src="img/x.svg" alt="Ícone de confronto"> <span>${game.team_away_score}</span>
      </div>
      <div class="team team-right">
        <span>${game.team_away_name}</span>
        <img src="img/team_shield_${game.team_away_id.split('-')[1]}.svg" alt="Escudo ${game.team_away_name}">
      </div>
    </div>
  `).join('');

  prevRoundButton.disabled = roundIndex === 0;
  nextRoundButton.disabled = roundIndex === roundsData.length - 1;
}

function toggleLoading(show) {
  loadingElement.style.display = show ? 'flex' : 'none';
  gamesListElement.style.display = show ? 'none' : 'flex';
}

function nextRound() {
  if (currentRoundIndex < roundsData.length - 1) {
    currentRoundIndex++;
    renderRound(currentRoundIndex);
  }
}

function prevRound() {
  if (currentRoundIndex > 0) {
    currentRoundIndex--;
    renderRound(currentRoundIndex);
  }
}

nextRoundButton.addEventListener('click', nextRound);
prevRoundButton.addEventListener('click', prevRound);

fetchRounds();
