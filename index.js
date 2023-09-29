const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const postContainerEl = document.getElementById("post-container")
const realNameEl = document.getElementById("name")
const userNameEl = document.getElementById("username")
const userLocationEl = document.getElementById("location")
const avatarEl = document.getElementById("post-user-avatar")
const postEl = document.getElementById("post")
const commentEl =document.getElementById("comment")
const likesEl = document.getElementById("quantity")
const heartEl = document.getElementById("")
let postsItems = ""
let newPosts = [...posts]

// adding likes to the post    
function addLikes(post){
    // console.log('adding likes');
    newPosts[post].likes += 1
    // console.log('likes ' + newPosts[post].likes);
    let newLikesEl = document.getElementById(`likes-id-${post}`)
    newLikesEl.textContent = newPosts[post].likes
    // console.log( newLikesEl.textContent);
    render(newPosts)
    }



//rendering all posts from the array 
const render = function(data){
for (let i = 0; i < data.length; i++) {
    realNameEl.innerHTML = data[i].name
    userNameEl.innerHTML = data[i].username
    userLocationEl.innerHTML = data[i].location
    avatarEl.src = data[i].avatar
    // create image element and removing old
    postEl.innerHTML = `<img  src=${data[i].post} 
                                      alt="post photo" 
                                      id="post-photo" 
                                      ondblclick="addLikes(${i})">`
    commentEl.innerHTML = data[i].comment
    likesEl.textContent = data[i].likes
    likesEl.id = `likes-id-${i}`
    // console.log("new likes: " + likesEl.innerHTML)
    postsItems += postContainerEl.innerHTML
    }
    // console.log(postsItems);
    
}
render(newPosts);
postContainerEl.innerHTML = postsItems
// console.log(postsItems)


