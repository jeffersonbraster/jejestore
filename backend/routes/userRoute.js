import express from 'express';
import User from '../models/userModel';
import { getToken } from '../util';

const router = express.Router();

router.post('/signin', async(req, res) => {
    const signinUser = await User.findOne({
        email: req.body.email,
        password: req.body.password
    });

    if(signinUser) {
        res.send({
            id: signinUser.id,
            name: signinUser.name,
            email: signinUser.email,
            isAdmin: signinUser.isAdmin,
            token: getToken(signinUser)
        })
    } else {
        req.statusCode(401).send({error: 'Invalido E-mail ou Senha'})
    }
})

router.post('/register', async(req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    const newUser = await user.save();

    if(newUser) {
        res.send({
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            isAdmin: newUser.isAdmin,
            token: getToken(newUser)
        })
    } else {
        req.statusCode(401).send({error: 'Erro ao criar usuário'})
    }
})

router.get('/createadmin', async(req, res) => {
    
    try {
        const user = new User({
            name: 'Jefferson',
            email: 'jeffersonbraster@gmail.com',
            password: '123456',
            isAdmin: true
        });
    
        const newUser = await user.save();
        res.send(user);
        
    } catch (error) {
        res.send({message: error.message});
    }
    
});

export default router;