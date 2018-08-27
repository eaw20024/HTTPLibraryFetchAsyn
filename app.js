const http = new EasyHTTP;

// Get Users
// const users = http.get('https://jsonplaceholder.typicode.com/users')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));


// User Data

const data = {
    name: 'Eric Washington',
    username: 'eaw5117',
    email: 'eew@gmail.com'
}

// Create Post
// http.post('https://jsonplaceholder.typicode.com/users', data)
//     .then(data => console.log(data))
//     .catch(data => console.log(err));

// Update Post - PUT
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//     .then(data => console.log(data))
//     .catch(data => console.log(err));

// Delete Post
http.delete('https://jsonplaceholder.typicode.com/users/2')
    .then(data => console.log(data))
    .catch(data => console.log(err));