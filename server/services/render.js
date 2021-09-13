const axios = require('axios');
const { response } = require('express');

exports.homeRoutes = (req,res) => {
    axios.get('http://localhost:3000/api/users')
        .then(response => {
            res.render('index',{users : response.data});
        })
        .catch(err => {
            res.send(err);
        })
}

exports.addUser= (req,res) => {
    res.render('user');
}

exports.updateUser = (req,res) => {
    axios.get('http://localhost:3000/api/users', {params : {id : req.query.id}})
        .then(data => {
            res.render('update_user',{users : data.data});
        })
        .catch(err => {
            res.send(err);
        })
}
