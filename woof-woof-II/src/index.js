getDogs();
// dogFilter();

function getDogs() {
    fetch('http://localhost:3000/pups')
        .then(res => res.json())
        .then(dogData => dogData.forEach(displayDog))
}

function displayDog(doggo) {
    const dogBar = document.getElementById('dog-bar');


    const span = document.createElement("span")
    span.textContent = doggo.name;

    span.addEventListener("click", showDogs);

    dogBar.append(span)
    //dogs now spanning dogBar
    function showDogs() {
        const doggoBox = document.getElementById("dog-info")
        doggoBox.innerHTML = ""
        const pics = document.createElement("img")
        pics.src = doggo.image

        const h2s = document.createElement("h2")
        h2s.textContent = doggo.name

        const catchPhrase = document.createElement("h5")
        catchPhrase.innerText = "Catch Phrase: " + doggo.catch_phrase

        const btn = document.createElement("button")

        btn.innerText = doggo.isGoodDog ? "Good Dog" : "Bad Dog"


        doggoBox.append(pics, h2s, catchPhrase, btn)
    }
}

