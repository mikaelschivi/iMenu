const Item = require('../database/models/item');
const mongoose = require('mongoose');

module.exports = (app) => {

    // insere novo item no banco de dados
    // {
    //   "name": "",
    //   "price": "",
    //   "ingrendients": ""
    // }
    app.post('/api/createItem', async (req, res) => {
        const item = new Item(req.body);
        try{
            await item.save();
            console.log({ status: 'item created',
                          info: req.body
                        });
            res.status(201).json({item});
        } catch(err){
            res.status(400).json(err);
            console.log(err);
        }
    });
    
    // busca por todos os items no banco de dados
    app.get('/api/findAllItems', async (req, res) => {
        try{
            const result = await Item.find();
            res.status(200).json({
                "items": result
            });
        } catch(err){
            res.status(500).send({ error: "error" });
            console.log(err);
        }
    });
    
    // busca por um item pelo seu id no banco de dados
    app.get('/api/findItemById/:id', async (req, res) => {
        try{
            const result = await Item.findById(req.params.id);
            if (!result){
                res.send(400).send({ error: 'item not found' });
            }
            res.status(200).json({
                "user": result
            });
        } catch(err){
            res.status(401).send({ error: "error" });
            console.log(err);
        }    
    });

    app.delete('/api/deleteItemById/:id', async (req, res) => {
        try{
            const result = await Item.findByIdAndDelete(req.params.id)
            if (!result){
                res.send(400).send({ error: 'item not found' });
            };
            console.log({ status: 'item deleted',
                          info: result
            });
            res.status(200).json({
                "deleted item": result
            });
        } catch(err){
            res.status(401).send("error");
            console.log(err);
        }
    });        


    // teste ryan
        // busca por um item pelo seu nome no banco de dados
        app.get('/api/findItemByName/:name', async (req, res) => {
            try{
                const result = await Item.findById(req.params.name);
                if (!result){
                    res.send(400).send({ error: 'item not found' });
                }
                res.status(200).json({
                    "user": result
                });
            } catch(err){
                res.status(401).send({ error: "error" });
                console.log(err);
            }    
        });
}



