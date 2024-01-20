const User = require('../models/User')


async function register(req, res){
    res.sendStatus(200)
}

async function login(req, res){
    res.sendStatus(200)
}

async function logout(req, res){
    res.sendStatus(200)
}

async function refresh(req, res){
    res.sendStatus(200)
}

async function user(req, res){
    res.sendStatus(200)
}

module.exports = {register, login, logout, refresh, user}