let currentRoundIndex = 0;
let roundsData = [];

// Função para buscar dados da API
async function fetchRounds() {
  try {
    const response = await fetch('https://sevn-pleno-esportes.deno.dev/');
    roundsData = await response.json();
    renderRound(currentRoundIndex);  // Renderizar a primeira rodada inicialmente
  } catch (error) {
    console.error('Erro ao buscar dados da API:', error);
  }
}

// Função para renderizar os jogos da rodada
function renderRound(roundIndex) {
  const round = roundsData[roundIndex];
  const gamesList = document.getElementById('games-list');
  const roundNumberSpan = document.getElementById('round-number');

  // Atualizar o número da rodada
  roundNumberSpan.textContent = `RODADA ${round.round}`;

  // Limpar a lista de jogos antes de renderizar novos
  gamesList.innerHTML = '';

  // Iterar sobre os jogos da rodada e criar elementos HTML para cada jogo
  round.games.forEach(game => {
    const gameItem = document.createElement('div');
    gameItem.classList.add('game-item');

    gameItem.innerHTML = `
    <div class="team team-left">
      <img src="img/team_shield_${game.team_home_id.split('-')[1]}.svg" alt="Escudo ${game.team_home_name}">
      <span>${game.team_home_name}</span>
    </div>
    <div class="score">
      <span>${game.team_home_score}</span> x <span>${game.team_away_score}</span>
    </div>
    <div class="team team-right">
      <span>${game.team_away_name}</span>
      <img src="img/team_shield_${game.team_away_id.split('-')[1]}.svg" alt="Escudo ${game.team_away_name}">
    </div>
  `;
  

    gamesList.appendChild(gameItem);
  });

  // Verificar se deve desabilitar os botões de navegação
  document.getElementById('prev-round').disabled = roundIndex === 0;
  document.getElementById('next-round').disabled = roundIndex === roundsData.length - 1;
}

// Função para avançar para a próxima rodada
function nextRound() {
  if (currentRoundIndex < roundsData.length - 1) {
    currentRoundIndex++;
    renderRound(currentRoundIndex);
  }
}

// Função para voltar para a rodada anterior
function prevRound() {
  if (currentRoundIndex > 0) {
    currentRoundIndex--;
    renderRound(currentRoundIndex);
  }
}

// Adicionar event listeners aos botões de navegação
document.getElementById('next-round').addEventListener('click', nextRound);
document.getElementById('prev-round').addEventListener('click', prevRound);

// Chamar a função de busca quando a página for carregada
fetchRounds();
