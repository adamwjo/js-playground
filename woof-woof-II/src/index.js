getDogs();
handleForm()

function getDogs() {
    fetch('http://localhost:3000/pups')
        .then(res => res.json())
        .then(dogData => dogData.forEach(displayDog))
}


function handleForm() {

    document.querySelector('form').addEventListener('submit', (event) => {
        event.preventDefault();

        // grab the user input
        const user_input = event.target.catchPhrase.value
        console.log(user_input);
        // update the catchPhrase section with that input
        document.getElementById("phrase").innerText = user_input

        event.target.reset()
    })
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
        catchPhrase.id = "phrase"

        const btn = document.createElement("button")



        btn.innerText = doggo.isGoodDog ? "Good Dog" : "Bad Dog"

        // if(doggo.isGoodDog){
        //     btn.innerText = "Good Dog" 
        // } else {
        //     btn.innerText = "Bad Dog"
        // }


        doggoBox.append(pics, h2s, catchPhrase, btn)
    }
}

