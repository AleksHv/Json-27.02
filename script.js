function displayPosts(posts) {
    const postsContainer = document.getElementById('posts');
    const postTrim = posts.slice(0, 2) // обрезаем массив
    postTrim.forEach(post => {
        const postElement = document.createElement('div');
        postElement.style.marginBottom = '20px';
        postElement.innerHTML = `
            <h2 class='postH2'>${post.title}</h2> 
            <p class=''>${post.body}</p>
            <hr>
            `;
        postsContainer.appendChild(postElement)
    });
}
const apiPost = 'https://jsonplaceholder.typicode.com/posts';
const getPosts = async () => {
    const response = await fetch(apiPost).then(res => { return (res.json()) })
    // console.log(response)
    displayPosts(response)
}
getPosts()

function displayComments(comments) {
    const postsContainerTwo = document.getElementById('comments')
    const commentTrim = comments.slice(0, 2)
    commentTrim.forEach(comment => {
        const commentElement = document.createElement('div')
        commentElement.style.marginBottom = '20px'
        commentElement.innerHTML = `
        <h2 class = 'postH2'>${comment.name}</h2>
        <p class = ''>${comment.email}<p/>
        <p class = ''>${comment.body}<p/>
        <hr>        
        `
        postsContainerTwo.appendChild(commentElement)
    })
}

const apiComments = 'https://jsonplaceholder.typicode.com/comments'
const getComments = async () => {
    const response = await fetch(apiComments).then(res => { return (res.json()) })
    displayComments(response)
}
getComments()


function displayUsers(users) {
    const usersContainer = document.getElementById('users')
    const userTrim = users.slice(0, 2)
    userTrim.forEach(user => {
        const userElement = document.createElement('div')
        userElement.style.marginBottom = '20px'
        userElement.innerHTML = `
        <h2 class = 'postH2'>${user.name}</h2>
        <p class = ''>Username: ${user.username}</p>
        <p class = ''>Email: ${user.email}</p>
        <p class = ''>Address:</p>
        <p> ${user.address.street},${user.address.suite},
        ${user.address.city},${user.address.zipcode}</p>
        
        <p class = ''>Phone: ${user.phone}</p>
        <p class = ''>Website: ${user.website}</p>
        <p class = ''>Company: </p>
        <p class = ''>${user.company.name}</p>
        <p class = ''>${user.company.catchPhrase}</p>
        
        `
        usersContainer.appendChild(userElement)
    })
}

const apiUser = 'https://jsonplaceholder.typicode.com/users'
const getUsers = async () => {
    const response = await fetch(apiUser).then(res => { return (res.json()) })
    displayUsers(response)
}
getUsers()