// name -> base_url/search/batman
// id -> base_url/id

const randomHero = document.getElementById('randomHero')
const findHero = document.getElementById('findHero')
const input = document.getElementById('input')
const footer = document.querySelector('footer')

const randomNumber = () => {
  const number = Math.floor(Math.random() * 731) + 1
  return number
}

const getRandom = number => {
  fetch(`https://www.superheroapi.com/api.php/6276633832387040/${number}`)
    .then(response => response.json())
    .then(json => {
      console.log(json)
      if (json.response === 'error') {
        footer.innerHTML = `<p class="not-found">Hero not found</p>`
        return
      }
      footer.innerHTML = `<img src="${json.image.url}"/>`
    })
}

const getHero = () => {
  // console.log('birsey')
  fetch(`https://www.superheroapi.com/api.php/6276633832387040/search/${input.value}`)
    .then(response => response.json())
    .then(json => {
      //console.log(json)
      if (json.response === 'error') {
        footer.innerHTML = `<p class="not-found">Hero not found</p>`
        return
      }
      footer.innerHTML = `<img src="${json.results[0].image.url}"/>`
    })
}

getRandom(randomNumber())
if (input.value) getHero()
//getHero()

findHero.addEventListener('click', () => {
  getHero()
})

randomHero.addEventListener('click', () => {
  getRandom(randomNumber())
})
