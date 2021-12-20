// console.log("first")
// setTimeout(() => console.log("second"), 0)
// console.log("third")
// setTimeout(() => console.log("last"), 0)





init()

function init() {
  handleForm()
  handleClicks()
}

function handleForm() {
  //grab the form
  const form = document.getElementById("create-task-form")
  // add 'submit' event listener to the form 
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    renderTask(event)
    event.target.reset()
  })
}

function renderTask(event) {
  const input = event.target["new-task-description"].value

  // create an li element
  const li = document.createElement("li")
  // update that li with the text from the form
  li.innerText = input

  const delButton = document.createElement("button")
  delButton.innerText = "x"
  // add an 'click\' event the li
  // delButton.addEventListener('click', () => {
  //   li.remove()
  // })
  li.append(delButton)
  // when we click lets remove the li
  // find where it belongs on the DOM and append
  document.getElementById('tasks').appendChild(li)
}

function handleClicks() {
  document.getElementById('tasks').addEventListener('click', (e) => {
    console.log(e.target)
    console.log(e.currentTarget)
    // if the e.target is an li remove it, else do nothing
    if (e.target.nodeName == "BUTTON") {
      e.target.parentNode.remove()
    } else {
      console.log("cant do that");
    }
  })
}






// console.log(event.target) ---> where the event was triggered
    // console.log(event.Currentarget) --> where the eventListener was attached
