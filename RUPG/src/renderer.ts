let renderFriendsList = function(info: Info){
    $(".friends-container").empty()
    $(".friends-container").html(info.friendsList)
}

let renderUser = function(info: Info): void{
   $(".user-container").empty()
   const source = $("#user-template").html()
   const template = Handlebars.compile(source) 
   const someHTML = template(info.mainUser)
   console.log(someHTML)
   $(".user-container").append(someHTML)
   renderFriendsList(info)
}

let renderQuote = function(info: Info){
    $(".quote-container").empty()
    const source = $("#quote-template").html()
    const template = Handlebars.compile(source) 
    const someHTML = template(info.quote)
    console.log(someHTML)
    $(".quote-container").append(someHTML)
}

Handlebars.registerHelper("properCase", function(text){
    let newText = text.charAt(0).toUpperCase() + text.substring(1, text.length).toLowerCase()
    return newText
})

let renderPoke = function(info: Info){
    $(".pokemon-container").empty()
    const source = $("#poke-template").html()
    const template = Handlebars.compile(source) 
    const someHTML = template(info.poke)
    console.log(someHTML)
    $(".pokemon-container").append(someHTML)  
}

let renderMeat = function(info: Info){
    $(".meat-container").empty()
    const source = $("#meat-template").html()
    const template = Handlebars.compile(source) 
    const someHTML = template(info.meat)
    console.log(someHTML)
    $(".meat-container").append(someHTML)    
}

let renderSavedUsers = function(){
    $("#saved-users").empty()

    for(let i=0, len = localStorage.length; i<len; i++){
       let item = (JSON.parse(localStorage.getItem(localStorage.key(i)))).mainUser.userName    
       $("#saved-users").append(`<option>${item}</option>`)
    }
}
