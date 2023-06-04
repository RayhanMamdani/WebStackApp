//import express from 'express';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');
const messages = require('./models/messages');
const product = require('./models/product');
const rating = require('./models/ratings');
const passport = require('passport')
const { clearConfigCache } = require('prettier');
const User = require('./models/users')
const Messages = require('./models/messages')

const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json({limit: '10mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))
let idNUM = 2;

  const uri = 'mongodb://' + PORT;

app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize())
require('./passport')(passport);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});


app.get('/', (req, res) => res.send('Endpoint created'));


app.get('/products', async (req, res) => {
    try {

        const regex = new RegExp(req.query.searchTerm, 'gmi');
        // console.log(req.query.searchTerm)
        const products = await product.find({
            $or: [
                { product_name: regex},
                { description: regex}
            ]
        });
        // console.log(products); // Log the products
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/products', passport.authenticate('jwt', {session: false}), async (req, res) => {
    try {
        const newProduct = {
            product_name: req.body.product_name,
            price: req.body.price,
            description: req.body.description,
            quantity: req.body.quantity,
            user: req.user.id,
            product_image: req.body.product_image,
        };
        // console.log(req.user.products)
       req.user.products.push(newProduct);
         req.user.save();
        // console.log(newProduct);
        const createdProduct = await product.create(newProduct);
        res.send(createdProduct);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/products', async (req, res) => {
    try {
        const { description, price, product_image, product_name, quantity, user } = req.body;

        // Create a filter object to find the products to delete
        const filter = {
            description: description,
            price: price,
            product_name: product_name,
            quantity: quantity,
            user: user
        };

        // Delete the products that match the filter from the product collection
        const deletedProducts = await product.deleteMany(filter);

        // Remove the deleted products from the user's products array in the User collection
        await User.findOneAndUpdate(
            { _id: user },
            { $pull: { products: filter } }
        );

        res.json({ success: true, deletedCount: deletedProducts.deletedCount });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


  
app.get('/users/:id', async (req, res) => {
    const userId = req.params.id;
  
    try {
      const user = await User.findById(userId);
      if (user) {
        res.json(user);
        // console.log(user);
      } else {
        res.status(404).send('User not found');
      }
    } catch (err) {
      console.error('Error finding user:', err);
      res.status(500).send('An error occurred');
    }
  });
  
  
app.get('/messages', passport.authenticate('jwt', {session: false}), (req,res) => {
    Messages.findOne({init_id: req.user.id, recieve_id: req.body.sendId}).then(msg => {
        res.status(200).json({ chain: msg });

    })
})


app.post('/messages', passport.authenticate('jwt', { session: false }), async (req, res) => {
    try {
        
        let newChain = [{
            time: req.body.time,
            content: req.body.text,
            isSender: true
        }]
        let recip = await User.find({ _id: req.body.recId });
        let origChain = req.user.messages.filter(convo => convo.recipient == req.body.recId);
        // console.log(origChain);
        if (origChain.length == 0) {
            req.user.messages.push({
                recipient: recip[0]._id,
                chain: newChain
            })
        } else {
            // origChain[0].chain.push({
            //     time: req.body.time,
            //     content: req.body.text,
            //     isSender: true
            // })
            // req.user.messages[req.user.messages.findIndex(convo => convo.recipient._id == req.body.recId)].chain.push({
            //     time: req.body.time,
            //     content: req.body.text,
            //     isSender: true
            // })
            let messages = req.user.messages[req.user.messages.findIndex(convo => convo.recipient == req.body.recId)]
            messages.chain.push(newChain[0])
            req.user.messages[req.user.messages.findIndex(convo => convo.recipient == req.body.recId)] = messages

            
            // recip.messages[req.user.messages.findIndex(convo => convo.recipient._id == recip._id)] = messages
            // console.log(recip.messages[recip.messages.findIndex(convo => convo.recipient._id == req.user._id)])
            // console.log(req.user.messages[0])
            
        }
        //still have to fix isSender
        let index = recip[0].messages.findIndex(convo => convo.recipient.equals(req.user._id))

        if (index == -1){
            
            recip[0].messages.push(
                {
                    recipient: req.user._id,
                    chain: newChain
                }
            )

        } else{
            let arr = recip[0].messages[index]
            arr.chain.push(newChain[0])
            recip[0].messages[index] = arr
            
        }
        req.user.save()
        
        recip[0].save()

        // res.send(origChain);
        res.status(200).json({success: true}) 
    } catch (err) {
        res.status(500).json({error: err.msg})
    }
})    // let msgArr = req.user.message;
    // console.log(msgArr)
    // console.log(req.user)
    // console.log(req.body.recId)
    // res.status(200).json({success: true}) 

app.get('/userById', (req, res) => {
    let {id} = req.query

    User.findOne({_id: id}).then(user => {
  
        if (user){

            return res.status(200).json({
                user: user
            })
        }else{
            return res.status(404).json({
                msg: "User not found."
            })
        }
    }).catch(err => {
        return res.status(404).json({
            msg: "Invalid ID"
        })
    })

})


app.get('/currentUser', passport.authenticate('jwt', {session: false}), (req,res) => {
  
    res.status(200).json({ user: req.user });


})

app.get('/profileByEmail', (req,res) => {
    let {email} = req.body
    let profile = User.findOne({email: email})
    if (profile){

    }else {
        res.status(404).json({ msg: "No profile with matching email was found" });

    }
    
})


// app.get('/products/:id', async (req, res) => {
//     try {
//         const newProduct = products.find(p => p.id === parseInt(req.params.id))
//         res.json(newProduct);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// })


app.get('/products/productInfo', async (req, res) => {
    try {
        const productId = req.query.searchTerm;
        // console.log(productId);
        const productfound = await product.findById(productId); // Assuming your model is named 'Product'
        
        if (!productfound) {
            // Handle case when the product is not found
            return res.status(404).json({ error: 'Product not found' });
        }
        
        // console.log(productfound); // Log the product
        res.json(productfound);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

//get userRouts
const users = require('./api/UserRoutes');
const { faDatabase } = require('@fortawesome/free-solid-svg-icons');

app.use('/api/users', users)
