let currentRoundIndex = 0;
let roundsData = [];

async function fetchRounds() {
  try {
    document.getElementById('loading').style.display = 'flex';
    document.getElementById('games-list').style.display = 'none';

    const response = await fetch('https://sevn-pleno-esportes.deno.dev/');
    roundsData = await response.json();

    document.getElementById('loading').style.display = 'none';
    document.getElementById('games-list').style.display = 'flex';

    renderRound(currentRoundIndex); 
  } catch (error) {
    console.error('Erro ao buscar dados da API:', error);
    document.getElementById('loading').textContent = 'Erro ao carregar os dados!';
  }
}

function renderRound(roundIndex) {
  const round = roundsData[roundIndex];
  const gamesList = document.getElementById('games-list');
  const roundNumberSpan = document.getElementById('round-number');

  roundNumberSpan.textContent = `RODADA ${round.round}`;

  gamesList.innerHTML = '';

  round.games.forEach(game => {
    const gameItem = document.createElement('div');
    gameItem.classList.add('game-item');

    gameItem.innerHTML = `
      <div class="team team-left">
        <img src="img/team_shield_${game.team_home_id.split('-')[1]}.svg" alt="Escudo ${game.team_home_name}">
        <span>${game.team_home_name}</span>
      </div>
      <div class="score">
        <span>${game.team_home_score}</span> <img src="img/x.svg" alt="Icone de Versos"> <span>${game.team_away_score}</span>
      </div>
      <div class="team team-right">
        <span>${game.team_away_name}</span>
        <img src="img/team_shield_${game.team_away_id.split('-')[1]}.svg" alt="Escudo ${game.team_away_name}">
      </div>
    `;

    gamesList.appendChild(gameItem);
  });

  document.getElementById('prev-round').disabled = roundIndex === 0;
  document.getElementById('next-round').disabled = roundIndex === roundsData.length - 1;
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

document.getElementById('next-round').addEventListener('click', nextRound);
document.getElementById('prev-round').addEventListener('click', prevRound);

fetchRounds();
