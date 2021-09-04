const players = document.getElementById('players')

const getData = () => {
  const allData = fetch('https://api.github.com/users/rafaballerini/followers')
    .then(response => response.json())
    .then(data => {
      data.map((user, i) => {
        if (i < 8) players.innerHTML += `<img src=${user.avatar_url}>`
      })
      if (data.length > 8) players.innerHTML += `<p>+p</p>`
    })
    .catch(err => console.log(err))

  return allData
}

window.onload = getData()
