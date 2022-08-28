let posts = [
    {
        text: "First post!",
        id: "p1",
        comments: [
            { id: "c1", text: "First comment on first post!" },
            { id: "c2", text: "Second comment on first post!!" },
            { id: "c3", text: "Third comment on first post!!!" }
        ]
    },
    {
        text: "Aw man, I wanted to be first",
        id: "p2",
        comments: [
            { id: "c4", text: "Don't wory second poster, you'll be first one day." },
            { id: "c5", text: "Yeah, believe in yourself!" },
            { id: "c6", text: "Haha second place what a joke." }
        ]
    }
]

let postNumber = 2
let commentNumber = 6

const getPosts = function(){
    return posts
}

const getPost = function(postID){
    for(let post of posts){
        if(post.id === postID){
            return post
        }
    }
}

const addPost = function(text){
    postNumber += 1

    let id = `p${postNumber}`
    let comments = []
    posts.push({text, id, comments})
}

const removePost = function(postID){
    let index = -1

    for(let post of posts){
        if(post.id === postID){
            index = posts.indexOf(post)
            break
        }
    }

    if(index !== -1){
       posts.splice(index, 1) 
    }
}

const addComment = function(postID, text){
    commentNumber += 1
    const id = `c${commentNumber}`

    for(let post of posts){
        if(post.id === postID){
            post.comments.push({id, text})
            break
        }
    }
}

const removeComment = function(postID, commentID){
  
    for(let post of posts){
        if(post.id === postID){
            for(let comment of post.comments){
                if(comment.id === commentID){
                   const index = post.comments.indexOf(comment)
                   post.comments.splice(index, 1)
                }
            }
        }
    }
}
