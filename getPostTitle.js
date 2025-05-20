function getPostTitle(id) {
    return fetch(`https://dummyjson.com/posts/${id}`)
    .then(res => res.json())
    .then(post => post.title)
    .catch(error => console.error(error))
    
};

getPostTitle(1)
    .then(title => console.log('Titolo del post', title));