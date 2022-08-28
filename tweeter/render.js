renderPosts = function(){
    $("#posts").empty()

    for(let post of posts){
       $("#posts").prepend(`<div class=\"post\" id=\"${post.id}\" data-id=\"${post.id}\">${post.text}</div>`)
       $(`#${post.id}`).append(`<button class=\"delete\" data-id=\"${post.id}\">Delete</buttun>`)

       for(let comment of post.comments){
          $(`#${post.id}`).append(`<div class=\"comments\" data-id=\"${comment.id}\">${comment.text}</div>`)
          $(`#${post.id}`).append(`<button class=\"delete-comment\" data-id=\"${comment.id}\">X</buttun>`)
       }
       
       $(`#${post.id}`).append("<input class=\"addComment\" type=\"text\" placeholder=\"Add a comment\">")
       
    }
}
