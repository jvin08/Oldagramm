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
const postEl = document.getElementById("post-photo")
const commentEl =document.getElementById("comment")
const likesEl = document.getElementById("quantity")
let postsItems = ""

for (let i = 0; i < posts.length; i++) {
    realNameEl.innerHTML = posts[i].name
    userNameEl.innerHTML = posts[i].username
    userLocationEl.innerHTML = posts[i].location
    avatarEl.src = posts[i].avatar
    postEl.src = posts[i].post
    commentEl.innerHTML = posts[i].comment
    likesEl.innerHTML = posts[i].likes
    postsItems += postContainerEl.innerHTML;
}
postContainerEl.innerHTML = postsItems
console.log(postsItems);


