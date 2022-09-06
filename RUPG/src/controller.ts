$("#button").on("click", async function(){
    getUsers().then(()=>
        renderUser()
    ) 

    getQuote().then( ()=>
        renderQuote()
    )

    getPoke().then( ()=>
       renderPoke()
    )

    getMeat().then( ()=>
       renderMeat()
    )
})

$("#save-user").on("click", function(){
    window.localStorage.setItem(info.mainUser.userText ,JSON.stringify(info))
})