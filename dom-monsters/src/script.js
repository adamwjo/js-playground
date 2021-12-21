


function (monObj) {
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

    return monsterCard
}




{/* <div class="card">
    <p>Monster</p>
    <button class="like-btn"> ❤️ 0</button>
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png" alt="">
</div>  */}