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
        console.log({ status: 'item created',
                      info: req.body
                    });
        const item = new Item(req.body);
        try{
            await item.save();
            res.status(201).json({item});
        } catch(err){
            res.status(400).json(err);
            console.log(err);
        }
    });
    
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
}