
const BASE_URL = 'http://localhost:3000/ramens/'


getRamenData()
handleForm()

function getRamenData() {
    fetch(BASE_URL)
        .then((r) => r.json())
        .then((someData) => someData.forEach(renderRamenImg))
}


// create an image element
// use the ramenObj image value to update that img elemt
// append the image element
function renderRamenImg(ramenObj) {
    const img = document.createElement('img')
    img.src = ramenObj.image

    document.getElementById("ramen-menu").appendChild(img)

    // click on an img element
    img.addEventListener('click', (event) => {


        console.log(event)
        const { image, name, restaurant, comment, rating } = ramenObj


        const detImg = document.querySelector('.detail-image')
        detImg.src = image

        const detName = document.querySelector('.name')
        detName.innerText = name

        const detRestaurant = document.querySelector('.restaurant')
        detRestaurant.innerText = restaurant

        const detRating = document.querySelector('#rating-display')
        detRating.innerText = rating

        const detComment = document.querySelector('#comment-display')
        detComment.innerText = comment
    })
    // update the details section with data from ramenObj
}

function handleForm() {
    // grab the form from the DOM
    const newRamenForm = document.getElementById('new-ramen')
    // add an addEventListener to the form
    newRamenForm.addEventListener('submit', (event) => {
        event.preventDefault()


        const newName = event.target["new-name"].value
        const newRestaurant = event.target["new-restaurant"].value
        const newImg = event.target["new-image"].value
        const newRating = event.target["new-rating"].value
        const newComment = event.target["new-comment"].value

        const newRamen = {
            name: newName,
            restaurant: newRestaurant,
            image: newImg,
            rating: newRating,
            comment: newComment
        }



        fetch(BASE_URL, {
            headers: { "Content-Type": "application/json" },
            method: "POST",
            body: JSON.stringify(newRamen)
        })
            .then(r => r.json())
            .then(newEntity => renderRamenImg(newEntity))
            .catch(error => console.error(error))


        event.target.reset()
    })
    // Grab the values from the user inputs
    // use those values to create a new ramenobj and render
}