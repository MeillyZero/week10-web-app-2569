const express = require('express');
const router = express.Router();

const users = require('../Data/Users');

//let users = [
//    { id: 101, name: 'John Doe', email: 'john.doe@example.com' },
//    { id: 202, name: 'Jane Smith', email: 'jane.smith@example.com' }
//];

router.get('/', (req, res) => {
  res.json(users);
});

router.get('/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    user ? res.status(200).json(user) : res.status(404).json({ error: 'User not found' });
});

////router.get('/', (req, res) => {
////    return res.status(200).json('Good afternoon!');
////});
//
//router.get('/users/:id', (req, res) => {
//    const user = users.find(u => u.id === parseInt(req.params.id));
//    //if (!user) {
//    //    return res.status(404).json({ error: 'User not found' });
//    //}
//    //return res.status(200).json(user);
//    user ? res.status(200).json(user) : res.status(404).json({ error: 'User not found' });
//});

router.get('/search', (req, res) => {
   const {keyword = '', limit = 10} = req.query;
   const searchResults = users.filter(user => user.name.toLowerCase().includes(keyword.toLowerCase())).slice(0, limit);
  
    //console.log(req.query); 
  // { keyword: 'shoes', color: 'red' }
  
  res.json({ results: searchResults, keyword, limit });
});

module.exports = router;