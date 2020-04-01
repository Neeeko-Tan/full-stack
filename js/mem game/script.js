// css class for different card image
const CARD_TECHS = [
  'html5',
  'css3',
  'js',
  'sass',
  'nodejs',
  'react',
  'linkedin',
  'heroku',
  'github',
  'aws'
];

// only list out some of the properties,
// add more when needed
const game = {
  score: 0,
  level: 1,
  timer: 60,
  timerDisplay: null,
  scoreDisplay: null,
  levelDisplay: null,
  timerInterval: null,
  startButton: null,
  // and much more
  preSelected: null,
  checkMatching: false
};



setGame();
bindCardClick();

/*******************************************
/     game process
/******************************************/
function setGame() {}

function startGame() {}

function handleCardFlip() {}

function nextLevel() {}

function handleGameOver() {}

/*******************************************
/     UI update
/******************************************/
function updateScore() {}

function updateTimerDisplay() {}

function generateCards() {}

/*******************************************
/     bindings
/******************************************/
function bindStartButton() {}

function unBindCardClick(card) {
  card.removeEventListener('click', handleCardClick);
}

function handleCardClick(){
  if (game.checkMatching) {
    return;
  }
  this.classList.add('card--flipped');
  const currentSelected = this;
  //click in the same card
  if (currentSelected === game.preSelected) {
    currentSelected.classList.remove('card--flipped');
    game.preSelected = null;
    return;
  }
  //check if this is the 2nd card
  if (game.preSelected) {
    //match or not (dataset.tech?)
    if (game.preSelected.dataset.tech === currentSelected.dataset.tech){
      unBindCardClick(game.preSelected);
      unBindCardClick(currentSelected);
      game.preSelected = null;
      return;
    }
    //not match
    //display card for 1 sec
    game.checkMatching = true;
    setTimeout(() => {
      currentSelected.classList.remove('card--flipped');
      game.preSelected.classList.remove('card--flipped');
      game.preSelected = null;
      game.checkMatching = false;
    }, 1000);
    return;
  }
  game.preSelected = currentSelected;
}

function bindCardClick() {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('click', handleCardClick);
  })
}
