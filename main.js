
function createPlayer(className, options) {
  const PLAYER_EL = document.createElement('div')
  const PROGRESSBAR_EL = getProgressbarEl(options)
  const CHARACTER_EL = getCharacterEl(options)

  PLAYER_EL.className = className

  PLAYER_EL.append(PROGRESSBAR_EL, CHARACTER_EL)
  appendToArenas(PLAYER_EL)
}

function appendToArenas(el) {
  const ARENAS_EL = [...document.getElementsByClassName('arenas')][0]
  
  if (ARENAS_EL) {
    ARENAS_EL.appendChild(el)
  }
}

function getProgressbarEl({ name, hp = 100 }) {
  const PROGRESSBAR_EL = document.createElement('div')
  const HEALTH_POINTS_EL = document.createElement('div')
  const PLAYER_NAME_EL = document.createElement('div')

  PROGRESSBAR_EL.className = 'progressbar'
  HEALTH_POINTS_EL.className = 'life'
  PLAYER_NAME_EL.className = 'name'

  HEALTH_POINTS_EL.style.width = `${hp}%`
  PLAYER_NAME_EL.innerText = name

  PROGRESSBAR_EL.append(HEALTH_POINTS_EL, PLAYER_NAME_EL)

  return PROGRESSBAR_EL
}

function getCharacterEl({ name, img }) {
  const CHARACTER_EL = document.createElement('div')
  const IMAGE_EL = document.createElement('img')

  CHARACTER_EL.className = 'character'
  IMAGE_EL.src = img || getCharacterImageUrl(name)

  CHARACTER_EL.appendChild(IMAGE_EL)

  return CHARACTER_EL
}

function getCharacterImageUrl(playerName) {
  const AVAILABLE_GIFS_BY_PLAYER_NAME = ['scorpion', 'kitana', 'liukang', 'sonya', 'subzero']

  return !!~AVAILABLE_GIFS_BY_PLAYER_NAME.indexOf(playerName.toLowerCase())
    ? `http://reactmarathon-api.herokuapp.com/assets/${playerName.toLowerCase()}.gif`
    : 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif'
}

createPlayer('player1', {
  name: 'SCORPION',
  hp: 100,
  img: '',
  weapon: [''],
  attack: () => console.log(`${this.name} Fight`),
})

createPlayer('player2', {
  name: 'kitana',
  hp: 80,
  img: '',
  weapon: [''],
  attack: () => console.log(`${this.name} Fight`),
})
