import express from 'express';
import User from '../models/userModel';

const router = express.Router();

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