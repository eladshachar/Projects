class Info{

    friendsList = ""
    mainUser = {
        userImage: "",
        userText: "",
    }
    poke = {
        pokeImage: "",
        favorite: ""
    }
    quote: string = ""
    meat: string = ""

}

let info = new Info

const getUsers = async function(){

   await $.ajax({
      url: 'https://randomuser.me/api/?results=7',
      dataType: 'json',
      success: function(data) {
        info.mainUser.userImage = data.results[0].picture.thumbnail
        info.mainUser.userText = `${data.results[0].name.first} ${data.results[0].name.last}<br>${data.results[0].location.city}, ${data.results[0].location.state}`

        info.friendsList = ""
        for(let i = 1; i<7; i++){
            info.friendsList += `<br>${data.results[i].name.first} ${data.results[i].name.last}` 
        }
      }
   })

   console.log(info.mainUser.userImage)

}

const getQuote = async function(){

    info.quote = await $.get('https://api.kanye.rest')
    console.log(info.quote)
}

const getPoke = async function(){
    let random = Math.floor(Math.random()*949)

    await $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon/${random}`,
        dataType: 'json',
        success: function(data) {
          info.poke.favorite = data.name
          info.poke.pokeImage = data.sprites.front_default
          console.log(data)
        }
     })
   
}

const getMeat = async function(){

    info.meat = await $.get('https://baconipsum.com/api/?type=all-meat&paras=5&format=text')
}