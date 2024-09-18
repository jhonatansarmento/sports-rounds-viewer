# Rodadas de Futebol

Este projeto é uma aplicação web simples que exibe as rodadas e jogos de um campeonato fictício de futebol. A aplicação busca dados de uma API externa, permite a navegação entre as rodadas e exibe as informações dos times e placares dos jogos de cada rodada.

## 📝 Funcionalidades

- Exibe os jogos da rodada atual de um campeonato fictício de futebol.
- Permite navegar entre as rodadas usando botões de próxima e anterior.
- Mostra os escudos dos times, placares e resultados de cada jogo.
- Exibe uma animação de loading enquanto os dados da API são carregados.

## 🚀 Tecnologias Utilizadas

- **HTML5**: Para a estruturação do conteúdo da página.
- **CSS3**: Para o design e layout, incluindo uma animação de loading.
- **JavaScript**: Para a lógica da aplicação, requisição à API e manipulação do DOM.
- **API**: [SEVN Esportes API](https://sevn-pleno-esportes.deno.dev/) usada para buscar os dados dos jogos.

## 📦 Estrutura do Projeto

```
|-- css/
|   |-- style.css  # Estilos da aplicação
|-- img/
|   |-- btn_left.svg  # Ícone de botão de rodada anterior
|   |-- btn_right.svg # Ícone de botão de próxima rodada
|   |-- sevn-logo.png # Logo do projeto
|   |-- team_shield_*.svg  # Escudos dos times
|-- js/
|   |-- main.js  # Script principal com lógica da aplicação
|-- index.html  # Página HTML principal
```

## 🛠️ Como Rodar o Projeto

### Pré-requisitos

- Um navegador web atualizado.

### Passos

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/jhonatansarmento/sports-rounds-viewer
   ```

2. **Abra o arquivo `index.html`** no navegador ou use uma extensão para servidor local, como o **Live Server** no VSCode.

3. **Navegue entre as rodadas**: A aplicação carregará os jogos da primeira rodada automaticamente, e você poderá navegar entre as rodadas usando os botões de navegação.

## 🐛 Problemas Conhecidos

- A aplicação depende da API externa. Caso a API fique fora do ar, a aplicação exibirá uma mensagem de erro

## 📞 Contato

**Desenvolvedor:** Jhonatan Tibiquera Sarmento de Souza  
**LinkedIn:** [linkedin.com/in/jhonatansarmento](https://www.linkedin.com/in/jhonatansarmento)  
**GitHub:** [github.com/jhonatansarmento](https://github.com/jhonatansarmento)  
**E-mail:** jhonatan.sarmento@gmail.com  
**Telefone:** (99) 99187-0568  
**Portfólio:** [www.jsarmento.dev](https://www.jsarmento.dev/)
