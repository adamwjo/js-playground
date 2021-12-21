
getData()

function getData() {
    fetch("http://localhost:3000/monsters")
        .then(res => res.json())
        .then((data) => data.forEach(renderMonster))
}



function renderMonster(monObj) {
    const monsterCard = document.createElement('div');
    monsterCard.className = 'card'

    const name = document.createElement('p')
    name.innerText = monObj.name

    const likeBtn = document.createElement('button')
    likeBtn.className = 'like-btn'
    likeBtn.innerText = `❤️ ${monObj.likes}`

    const image = document.createElement('img')
    image.src = monObj.image_url

    monsterCard.append(name, likeBtn, image)

    document.querySelector('.monster-grid').appendChild(monsterCard)
}

// async function getData() {
//     const res = await fetch("http://localhost:3000/monsters")
//     const data = await res.json()

//     console.log(data)
// }



{/* <div class="card">
    <p>Monster</p>
    <button class="like-btn"> ❤️ 0</button>
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png" alt="">
</div>  */}