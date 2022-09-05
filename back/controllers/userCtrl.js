const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.userSignUp = async  (req, res) => {
    if(req.body === undefined) return res.status(400).json('Empty data !!!')

    const emailExists = await User.findOne({ email: req.body.email});
    if(emailExists) return res.status(400).send({ message : 'Wrong username and password combination !'});

    // HASH THE PASSWORD
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // CREATE A NEW USER
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    });

    // SAVE USER
    try {
        await user.save();
        const userCreated = await User.findOne({ email: user.email });

        const accessToken = jwt.sign({ id: userCreated._id, name: userCreated.name}, process.env.TOKEN_SECRET_KEY);
        
        res.header('accessToken', accessToken);

        res.send({
            token: accessToken,
            userName: userCreated.name
        })
    }

    // SEND AN ERROR
    catch(err){ res.status(400).send(err) }
}


exports.userLogIn = async (req, res) => {

    //CHECKING IF USER EMAIL EXISTS
    const userExists = await User.findOne({ email: req.body.email});
    if(!userExists) return res.status(400).send({message: 'Email is not found !'});

    //CHECKING IF PASSWORD IS CORRECT
    const validPass = await bcrypt.compare(req.body.password, userExists.password);
    if(!validPass) return res.status(400).send({ message: 'Invalid password !'});

    // CREATE AND ASIGN A TOKEN
    const token = jwt.sign({ id: userExists._id }, process.env.TOKEN_SECRET_KEY)
    res.header('accessToken', token);
    res.send({ userId: userExists._id, token: token, name: userExists.name });
    
}