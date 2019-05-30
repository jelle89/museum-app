function doesNotPassAllValidations(name, msg) {
    //checks whether the name or message box is empty and displays an error message

    if (!name && !msg) {
        alert('You forgot to enter your name and a message!')
        return true
    }

    if (!name) {
        alert('You forgot to enter your name')
        return true
    }

    if (!msg) {
        alert('You forgot to enter a message!')
        return true
    }

    var firstLetter = name.charAt(0);
    var uppercaseFirstLetter = name.charAt(0).toUpperCase();
    var stringWithoutFirstLetter = name.slice(1)
    name = name.charAt(0).toUpperCase() + name.slice(1);
    }



    //checkes whether the message is too long and displays an error message
    if (msg.length > 280) {
        alert('Your message is too long!')
        return true
    }

return false 
}


// add event handler
function submitComment() {

    // gather data
    const inputField = document.getElementById('name')
    const name = inputField.value
    const textArea = document.getElementById('msg')
    const msg = textArea.value
    
    // create the elements you need
    const comment = document.createElement('section')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')
  
    // adjust the elements we created
    h3.innerHTML = `${name} said:`
    p.innerHTML = msg
    comment.classList.add('comment')
    comment.appendChild(h3)
    comment.appendChild(p)
  
    // display the elements on the page
    const commentSection = document.getElementById('comments')
    commentSection.appendChild(comment)
  
    // reset form values
    inputField.value = null
    textArea.value = null 
    

    if(doesNotPassAllValidations(name, msg)){
        return
    }
}
