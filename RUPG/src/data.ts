class Info{

    friendsList = ""
    mainUser = {
        userImage: "",
        userTown: "",
        userName: ""
    }
    poke = {
        pokeImage: "",
        favorite: ""
    }
    quote: string = ""
    meat: string = ""

}


const getUsers = async function(info: Info){

   await $.ajax({
      url: 'https://randomuser.me/api/?results=7',
      dataType: 'json',
      success: function(data) {
        info.mainUser.userImage = data.results[0].picture.thumbnail
        info.mainUser.userTown = `${data.results[0].location.city}, ${data.results[0].location.state}`
        info.mainUser.userName = `${data.results[0].name.first} ${data.results[0].name.last}`

        info.friendsList = ""
        for(let i = 1; i<7; i++){
            info.friendsList += `<br>${data.results[i].name.first} ${data.results[i].name.last}` 
        }
      }
   })

   console.log(info.mainUser.userImage)

}

const getQuote = async function(info: Info){

    info.quote = await $.get('https://api.kanye.rest')
    console.log(info.quote)
}

const getPoke = async function(info: Info){
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

const getMeat = async function(info: Info){

    info.meat = await $.get('https://baconipsum.com/api/?type=all-meat&paras=5&format=text')
}