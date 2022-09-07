const jwt = require('jsonwebtoken');

const validateToken = (req, res, next) => {
    const accessToken = req.header("accessToken");

    if(!accessToken) return res.json({ message: "USER NOT LOGGED IN !!!"});
    
    try{
        const token = jwt.verify(accessToken, process.env.TOKEN_SECRET_KEY);
        const id = token.id;
        req.auth = { id }
        next();
    } catch(err) {
        res.json({ message: err });
    }
}

module.exports = validateToken;