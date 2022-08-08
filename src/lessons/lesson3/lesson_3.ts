import axios from 'axios';

console.log('lesson 3');

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661


const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts/',
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    }
})
// get (read request)

axiosInstance.get('1').then((response) => console.log(response.data))

// post (create request)
axiosInstance.post('',{
    title: 'foo',
    body: 'bar',
    userId: 1
}).then(res => console.log(res))

// put (update request)
axiosInstance.put('1',{
    title: 'foo',
    body: 'bar',
    userId: 1
}).then(res => console.log(res))

// PATCH (edit request)
axiosInstance.patch('1',{
    title: 'empty',
    body: 'nothing',
    userId: 1
}).then(res => console.log(res))

// delete request
axiosInstance.delete('1').then(res => console.log(res))



// just a plug

export default ()=>{};