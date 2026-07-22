const express = require('express');
const app = express();
app.use(express.json());

const users = require('./Routes/Way');

app.use('/users', users);

users.get('/', (req, res) => {
    return res.status(200).json('Router is shit!');
});

users.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    user ? res.status(200).json(user) : res.status(404).json({ error: 'User not found' });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});


app.listen (3000, () => {
    console.log('Server is running on port 3000');
});





//const users = [
//    { id: 101, name: 'John Doe', email: 'john.doe@example.com' },
//    { id: 202, name: 'Jane Smith', email: 'jane.smith@example.com' }
//];
//


//app.get('/', (req, res) => {
//    return res.status(200).json('Good afternoon!');
//});
//
//app.get('/users/:id', (req, res) => {
//    const user = users.find(u => u.id === parseInt(req.params.id));
//    //if (!user) {
//    //    return res.status(404).json({ error: 'User not found' });
//    //}
//    //return res.status(200).json(user);
//    user ? res.status(200).json(user) : res.status(404).json({ error: 'User not found' });
//});
//
//app.get('/search', (req, res) => {
//   const {keyword = '', limit = 10} = req.query;
//   const searchResults = users.filter(user => user.name.toLowerCase().includes(keyword.toLowerCase())).slice(0, limit);
//  
//    //console.log(req.query); 
//  // { keyword: 'shoes', color: 'red' }
//  
//  res.json({ results: searchResults, keyword, limit });
//});
//