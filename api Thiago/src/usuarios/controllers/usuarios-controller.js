const express = require('express');
const routes = express.Router();
const Usuario = require('../models/usuario');
const { where } = require('sequelize');

function createRoute(){
    routes.post('/usuarios', async (req,res) => {
        console.log('create: ', req.body)
        const user=await Usuario.create(req.body)
        console.log(req.body)
       // console.log('usuario criado com sucesso')
        res.json(req.body);
    });
}

function findAllRoute(){
    routes.get('/usuarios', async (req,res) => {
        res.json(await Usuario.findAll());
    });
}

function findByIdRoute(){
    routes.get('/usuarios/:meuParametro',async (req,res) => {
        console.log(req.params)
        res.json(await Usuario.findOne({
            where:{
                id: req.params.id
            }
        }));
    });
}

function updateRoute(){
    routes.put('/usuarios', async(req,res) => {
        const user=await Usuario.update(req.body, {
            where:{
                id: req.body.id
            }
        })
        console.log(req.body)
        res.json(req.body);
    });
}

function removeRoute(){
    routes.delete('/usuarios',async (req,res) => {
        await Usuario.destroy({
            where:{
                id: req.body.id
            }
        }).then(()=> res.json("deu certo"))
        .catch((e)=> res.json(e, "deu errao"))
        
    });
}


function registerRoutes(){
    findAllRoute();
    createRoute();
    removeRoute();
    updateRoute();
    findByIdRoute();
    return routes
}


module.exports = registerRoutes