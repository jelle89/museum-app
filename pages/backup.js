function submitComment() {

    //gather data
    const inputField = document.getElementById('name')
    const name = inputField.value
    const textArea = document.getElementById('msg')
    const msg = textArea.value

    //create elements needed
    const comment = document.createElement('section')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')

    //adjusting elements
    h3.innerHTML = `${name} said:`
    p.innerHTML = msg
    comment.classList.add(`comment`)
    comment.appendChild(h3)
    comment.appendChild(p)

   
    const commentSection = getElementById('comments')
    commentSection.appendChild(comment)
    
    inputField = null
    textArea = null
  }
  