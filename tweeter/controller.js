renderPosts()

post = function(){
   let text = $("#input").val()
   $("#input").val("")
   addPost(text)
   renderPosts()
}

$("#container").on("click", ".delete", function(){
    const postID = $(this).closest(".post").attr("data-id")
    removePost(postID)
    renderPosts()
})

$("#container").on("keypress", ".addComment", function(e){
    if(e.which == 13){
        const postID = $(this).closest(".post").attr("data-id")
        const text = $(this).val()
        addComment(postID, text)
        renderPosts()
    }    
})

$("#container").on("click", ".delete-comment", function(){
    const postID = $(this).closest(".post").attr("data-id")
    const commentID = $(this).prev().attr("data-id")
    removeComment(postID, commentID)
    renderPosts()
})

