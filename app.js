// init github
const github = new GitHub


// search input
const searchUser = document.getElementById('searchUser')

// search input event listener
searchUser.addEventListener('keyup', (e) =>{
    // get input text
    const userText = e.target.value

    if(userText !== ''){
        // make http call
       github.getUser.then(data => {
        if(data.profile.message == 'Not Found'){
            // show alert

        }else{
            // show profile
        }
       })
    }else{
        // clear profile
        
    }
})