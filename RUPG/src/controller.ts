let currentProfile = new Info

$("#button").on("click", async function(){
    let info = new Info 
    
    getUsers(info).then(()=>
        renderUser(info)
    ) 

    getQuote(info).then( ()=>
        renderQuote(info)
    )

    getPoke(info).then( ()=>
       renderPoke(info)
    )

    getMeat(info).then( ()=>
       renderMeat(info)
    )

    renderSavedUsers()

    currentProfile = info
})

$("#save-user").on("click", function(){

    window.localStorage.setItem(currentProfile.mainUser.userName ,JSON.stringify(currentProfile))
    renderSavedUsers()
})

$("#load-user").on("click", function() {
    let select = (document.getElementById("saved-users")) as HTMLSelectElement
    let key = select.options[select.selectedIndex].text
    currentProfile = JSON.parse(window.localStorage.getItem(key))
    renderUser(currentProfile)
    renderQuote(currentProfile)
    renderPoke(currentProfile)
    renderMeat(currentProfile)

})

